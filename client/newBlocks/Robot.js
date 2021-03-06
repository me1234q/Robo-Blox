Blockly.Blocks['robot_drive'] = {
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#ff6214');

	this.appendDummyInput()
		.appendField('move robot')
		.appendField(new Blockly.FieldDropdown([['forward', 'FORWARD'], ['backward', 'BACKWARD']]), 'DIRECTION')
		.appendField('by')
		.appendField(new Blockly.FieldNumber(2), 'DISTANCE')
		.appendField('feet');
  }
};

Blockly.Blocks['robot_turn'] = {
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#ff6214');

		this.appendDummyInput()
			.appendField('turn robot')
			.appendField(new Blockly.FieldDropdown([['left', 'LEFT'], ['right', 'RIGHT']]), 'DIRECTION')
	}
	
};

Blockly.Blocks['robot_wait'] = {
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#ff6214');

		this.appendDummyInput()
			.appendField('wait for')
			.appendField(new Blockly.FieldNumber(2), 'TIME')
			.appendField('seconds');
	}
	
};

Blockly.Blocks['robot_on_start'] = {
  init: function() {
    this.setNextStatement(true);
		this.setColour('#ff6214');
		this.appendDummyInput()
			.appendField('On robot start');
	}
	
};