/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import nls = require('vs/nls');
import {BasicEmmetEditorAction} from 'vs/workbench/parts/emmet/node/emmetActions';

import {CommonEditorRegistry} from 'vs/editor/common/editorCommonExtensions';

class RemoveTagAction extends BasicEmmetEditorAction {
	constructor() {
		super(
			'editor.emmet.action.removeTag',
			nls.localize('removeTag', "Emmet: Remove Tag"),
			'Emmet: Remove Tag',
			'remove_tag'
		);
	}
}

CommonEditorRegistry.registerEditorAction(new RemoveTagAction());
