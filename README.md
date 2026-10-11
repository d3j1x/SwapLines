# SwapLines

**Swap two lines of code instantly in VS Code with `Ctrl + Alt + S`.**

SwapLines is a lightweight Visual Studio Code extension that makes rearranging code easier. Place two cursors on the lines you want to swap, then use the keyboard shortcut to exchange their contents.

## Features

- **Swap two lines:** Exchange the contents of two selected lines.
- **Multiple cursors:** Use `Alt + Click` to place two cursors on the lines you want to swap.
- **Keyboard shortcut:** Press `Ctrl + Alt + S` to perform the swap.
- **Quick and simple:** No configuration required.

## How to Use

1. Open a file in VS Code.
2. Hold `Alt` and click on each of the two lines you want to swap to place two cursors.
3. Press `Ctrl + Alt + S`.
4. The contents of the two lines will be swapped.

### Example

Before:

```javascript
const first = "Hello";
const second = "World";
```

After swapping the two lines:

```javascript
const second = "World";
const first = "Hello";
```

## Keyboard Shortcut

| Action | Windows / Linux |
|---|---|
| Swap two lines | `Ctrl + Alt + S` |

## Requirements

- Visual Studio Code `1.140.0` or later.
- No additional dependencies required to use the extension.

## Extension Settings

SwapLines does not currently add any custom VS Code settings.

## Known Issues

- Exactly two cursors are required to swap lines.
- Keyboard shortcuts may conflict with other extensions or system shortcuts on some setups.

If you encounter a bug or have a suggestion, please open an issue in the GitHub repository.

## Release Notes

### 0.0.1

- Initial release of SwapLines.
- Added two-line swapping using multiple cursors.
- Added the `Ctrl + Alt + S` keyboard shortcut.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.