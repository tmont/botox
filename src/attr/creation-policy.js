var TemplateItemTrait = require('../template-item-trait');

/**
 * You associate the CreationPolicy attribute with a resource to prevent its status from reaching create complete until AWS CloudFormation receives a specified number of success signals or the timeout period is exceeded. To signal a resource, you can use the cfn-signal helper script or SignalResource API. AWS CloudFormation publishes valid signals to the stack events so that you track the number of signals sent.
 *
 * The creation policy is invoked only when AWS CloudFormation creates the associated resource. Currently, the only AWS CloudFormation resources that support creation policies are AWS::AutoScaling::AutoScalingGroup, AWS::EC2::Instance, and AWS::CloudFormation::WaitCondition.
 *
 * The CreationPolicy attribute is helpful when you want to wait on resource configuration actions before stack creation proceeds. For example, if you install and configure software applications on an Amazon EC2 instance, you might want those applications up and running before proceeding. In such cases, you can add a CreationPolicy attribute to the instance and then send a success signal to the instance after the applications are installed and configured. For a detailed example, see Deploying Applications on Amazon EC2 with AWS CloudFormation.
 * @constructor
 * @implements TemplateItemTrait
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-creationpolicy.html}
 */
function CreationPolicy() {
	this.count = null;
	this.timeout = null;
}

CreationPolicy.prototype = {
	/**
	 * The number of success signals AWS CloudFormation must receive before it sets the resource status as CREATE_COMPLETE. If the resource receives a failure signal or doesn't receive the specified number of signals before the timeout period expires, the resource creation fails and AWS CloudFormation rolls the stack back.
	 *
	 * Default: 1
	 * Required: false
	 * @param {Number} count
	 * @returns {CreationPolicy}
	 */
	count: function(count) {
		this.count = count;
		return this;
	},
	/**
	 * The length of time that AWS CloudFormation waits for the number of signals that was specified in the Count property. The timeout period starts after AWS CloudFormation starts creating the resource, and the timeout expires no sooner than the time you specify but can occur shortly thereafter. The maximum time that you can specify is 12 hours.
	 *
	 * The value must be in ISO8601 duration format, in the form: "PT#H#M#S", where each # is the number of hours, minutes, and seconds, respectively. For best results, specify a period of time that gives your instances plenty of time to get up and running. A shorter timeout can cause a rollback.
	 * Default: PT5M (5 minutes)
	 * Required: false
	 * @param {String} timeout
	 * @returns {CreationPolicy}
	 */
	timeout: function(timeout) {
		if (!/PT\d+H\d+M\d+S/.test(timeout)) {
			throw new Error('Invalid timeout, must conform to ISO8601 duration format');
		}

		this.timeout = timeout;
		return this;
	},

	toJSON: function() {
		var json = {
			ResourceSignal: {}
		};
		if (this.count !== null) {
			json.Count = this.count;
		}
		if (this.timeout !== null) {
			json.ResourceSignal.timeout = this.timeout;
		}

		return json;
	}
};

Object.assign(CreationPolicy.prototype, TemplateItemTrait.prototype);

module.exports = CreationPolicy;
