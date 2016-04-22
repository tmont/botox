var Resource = require('../../resource');

/**
 * AWS::WorkSpaces::Workspace - The AWS::WorkSpaces::Workspace resource creates an Amazon WorkSpaces workspace, which is a cloud-based desktop experience for end users. For more information, see the Amazon WorkSpaces Administration Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function WorkSpacesWorkspace(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(WorkSpacesWorkspace, Resource);

WorkSpacesWorkspace.prototype = {
	
	
	/**
	 * The identifier of the bundle from which you want to create the workspace. A bundle specifies the details of the workspace, such as the installed applications and the size of CPU, memory, and storage. Use the DescribeWorkspaceBundles action to list the bundles that AWS offers.
	 *
	 * Required: true
	 * Update requires: Updates are not supported.. To update this property, you must also update another property that triggers a replacement, such as the UserName property.
	 *
	 * @param {String} value
	 * @return {WorkSpacesWorkspace}
	 */
	bundleId: function(value) {
		return this.set('BundleId', value);
	},

	/**
	 * The identifier of the AWS Directory Service directory in which you want to create the workspace. The directory must already be registered with Amazon WorkSpaces. Use the DescribeWorkspaceDirectories action to list the directories that are available.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {WorkSpacesWorkspace}
	 */
	directoryId: function(value) {
		return this.set('DirectoryId', value);
	},

	/**
	 * The name of the user to which the workspace is assigned. This user name must exist in the specified AWS Directory Service directory.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {WorkSpacesWorkspace}
	 */
	userName: function(value) {
		return this.set('UserName', value);
	},

	/**
	 * Indicates whether Amazon WorkSpaces encrypts data stored on the root volume (C: drive).
	 *
	 * Required: false
	 * Update requires: Updates are not supported.. To update this property, you must also update another property that triggers a replacement, such as the UserName property.
	 *
	 * @param {Boolean} value
	 * @return {WorkSpacesWorkspace}
	 */
	rootVolumeEncryptionEnabled: function(value) {
		return this.set('RootVolumeEncryptionEnabled', value);
	},

	/**
	 * Indicates whether Amazon WorkSpaces encrypts data stored on the user volume (D: drive).
	 *
	 * Required: false
	 * Update requires: Updates are not supported.. To update this property, you must also update another property that triggers a replacement, such as the UserName property.
	 *
	 * @param {Boolean} value
	 * @return {WorkSpacesWorkspace}
	 */
	userVolumeEncryptionEnabled: function(value) {
		return this.set('UserVolumeEncryptionEnabled', value);
	},

	/**
	 * The AWS Key Management Service (AWS KMS) key ID that Amazon WorkSpaces uses to encrypt data stored on your workspace.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.. To update this property, you must also update another property that triggers a replacement, such as the UserName property.
	 *
	 * @param {String} value
	 * @return {WorkSpacesWorkspace}
	 */
	volumeEncryptionKey: function(value) {
		return this.set('VolumeEncryptionKey', value);
	}
};

module.exports = WorkSpacesWorkspace;
