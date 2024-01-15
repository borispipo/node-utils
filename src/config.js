'use strict';
const path = require('path');
const Conf = require('conf');

class ElectronStore extends Conf {
	constructor(options) {
		const defaultCwd = "";

        options = options && typeof options == 'object' ? options : {}
		options  =  {
			name: 'config',
			...options
        };

		if (options.cwd) {
			options.cwd = path.isAbsolute(options.cwd) ? options.cwd : path.join(defaultCwd, options.cwd);
		} else {
			options.cwd = defaultCwd;
		}
		options.configName = options.name;
		delete options.name;
		super(options);
	}
	remove(key,...rest){
		if(typeof super.remove =="function") return super.remove(key,...rest);
		return this.set(key,null);
	}
}

module.exports = ElectronStore;