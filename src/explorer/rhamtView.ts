/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Red Hat. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as vscode from 'vscode';
import { RhamtExplorer } from './rhamtExplorer';
import { ModelService } from '../model/modelService';

export class RhamtView {

    constructor(private context: vscode.ExtensionContext,
        private modelService: ModelService) {
        this.createExplorer();
    }

    private createExplorer(): RhamtExplorer {
        return new RhamtExplorer(this.context, this.modelService);
    }
}