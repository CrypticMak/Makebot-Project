const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');


class Scratch3NewBlocks {
		constructor (runtime) {
		 this.runtime = runtime;
	}

	getInfo () {
	return {
			 id: 'newblocks',
			name: 'Makebot',
			
	   blocks: [
		{
				// opcode: 'writeLog',
				// blockType: BlockType.COMMAND,
				// text: 'log [TEXT]',
				// arguments: {
				// TEXT: {
				// 	type: ArgumentType.STRING,
				// 	defaultValue: "hello"
				// },

				 opcode: 'myReporter',
				 blockType: BlockType.COMMAND,
				 text: 'Pin [LETTER_NUM] is [TEXT]',
				 arguments: {
				 	LETTER_NUM: {
				 		type: ArgumentType.STRING,
				 		defaultValue: '13'
				 	},
				 	TEXT: {
				 		type: ArgumentType.STRING,
				
						menu: 'Mode',
						defaultValue: 'HIGH'
						
				 	}

		  				}

		} 
		],
		menus: {
			Mode: {
				acceptReporters: true,
				items: [{ text: "HIGH", value: "HIGH"}, {text: "LOW", value: "LOW"}]
			}
		}
	};
	}
		

	// writeLog (args) {
	// const text = Cast.toString(args.TEXT);
	// log.log(text);
	// }
	// myReporter (args) {
    //     return args.TEXT.charAt(args.LETTER_NUM);
    // };
	
}

module.exports = Scratch3NewBlocks;
