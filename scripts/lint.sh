#!/bin/bash

currentDir="$(dirname $(readlink -f "$0"))"
rootDir="$(dirname "${currentDir}")"
nodeModulesBin="${rootDir}/node_modules/.bin"
srcDir="${rootDir}/src"

exitCode=0

echo "linting generated code..."
"${nodeModulesBin}"/eslint "${srcDir}"/gen
if [ $? -ne 0 ]; then
	echo -e "\033[31m✘︎ eslint failed\033[0m"
	exitCode=$((exitCode + 1))
else
	echo -e "\033[32m✔︎ eslint passed\033[0m"
fi

echo "making sure there are no jsdoc errors..."
"${nodeModulesBin}"/jsdoc -X -r "${srcDir}" > /dev/null
if [ $? -ne 0 ]; then
	echo -e "\033[31m✘︎ jsdoc failed\033[0m"
	exitCode=$((exitCode + 1))
else
	echo -e "\033[32m✔ jsdoc passed︎\033[0m"
fi

exit ${exitCode}
