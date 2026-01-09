// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "hello-plugin" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('hello-plugin.hello', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello from your own VS Code plugin 🚀');
	});

	context.subscriptions.push(disposable);

	const editor = vscode.window.activeTextEditor;
	if(editor) {
		//context.subscriptions.push(editor);
		const selection = editor.selection;
		const selectedText = editor.document.getText(selection);
		console.log(`Selected text: ${selectedText}`);
		vscode.window.showInformationMessage(`You selected: ${selectedText}`);
	}
	context.subscriptions.push(editor);
	
	const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
	statusBarItem.text = 'Hello Plugin';
	statusBarItem.tooltip = 'This is a tooltip for the Hello Plugin status bar item';
	statusBarItem.command = 'hello-plugin.hello';
	statusBarItem.show();

	context.subscriptions.push(statusBarItem);

	vscode.workspace.onDidSaveTextDocument(doc => {
  	console.log("Saved:", doc.fileName);
	});

	

}

// This method is called when your extension is deactivated
export function deactivate() {}
