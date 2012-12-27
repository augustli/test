function testNlapiSubmitField() {

	var xx = ['jobdescription','approver' ];
	xx.push('accountnumber');
	xx[3] = 'jobdescription';
	nlapiSubmitField('employee', 1, xx, '');

	nlapiSubmitField('assemblybuild', 1, 'buildable');

	nlapiSubmitField('salesorder', 1, ['email', 'entity', 'balance']);

	//invalid
	nlapiSubmitField('salesorder', ['invalid'], ['excludecommission'],[' invalid']);
}