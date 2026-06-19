# FAQ

## On macOS, I see “Copicseal.app” is damaged and can’t be opened

![“Copicseal.app” is damaged and can’t be opened](/images/macos_cannot_open.png)

Because the macOS app is not notarized by Apple, the first launch may show a damaged-app warning or a developer verification prompt. You can bypass Gatekeeper with:

```bash
sudo xattr -rd com.apple.quarantine /Applications/Copicseal.app
```
