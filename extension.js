
const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    const disposable = vscode.commands.registerCommand(
        'swaplines.swap',
        async () => {
            const editor = vscode.window.activeTextEditor;

            if (!editor) {
                return;
            }

            const selections = editor.selections;

            if (selections.length !== 2) {
                vscode.window.showInformationMessage(
                    'SwapLines: Alt + Click on two lines to swap them.'
                );
                return;
            }

            const lineA = selections[0].active.line;
            const lineB = selections[1].active.line;

            if (lineA === lineB) {
                vscode.window.showInformationMessage(
                    'Please select two different lines.'
                );
                return;
            }

            const document = editor.document;

            const textA = document.lineAt(lineA).text;
            const textB = document.lineAt(lineB).text;

            const edit = new vscode.WorkspaceEdit();

            edit.replace(
                document.uri,
                document.lineAt(lineA).range,
                textB
            );

            edit.replace(
                document.uri,
                document.lineAt(lineB).range,
                textA
            );

            const success = await vscode.workspace.applyEdit(edit);

            if (success) {
                vscode.window.showInformationMessage(
                    'SwapLines: Lines swapped successfully!'
                );
            }
        }
    );

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
