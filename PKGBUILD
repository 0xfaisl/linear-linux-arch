pkgname=linear-linux-arch
pkgver=1
pkgrel=1
pkgdesc='Linear desktop launcher for Linux'
arch=('any')
url='https://linear.app'
license=('Apache-2.0')
depends=('chromium')
provides=('linear-linux')
conflicts=('linear-linux')
source=(
  'linear-linux'
  'linear-linux.desktop'
  'LICENSE'
  'linear-app-icon.png'
)
sha256sums=(
  'ab21e88790470b43bdde0aa43351d3fbc94edfe87fefa71f87465b3ab1674c54'
  '20725a06e8edebd710b78d5b38fbb3176abc48580907ebaea8b0dba78ed7ff76'
  'c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4'
  'a58c531ffaac3b8ff9d86a9446bdbc54f61f95026e3274dc6b864b692000ad37'
)

package() {
  install -Dm755 "$srcdir/linear-linux" "$pkgdir/usr/bin/linear-linux"
  install -Dm644 "$srcdir/linear-linux.desktop" "$pkgdir/usr/share/applications/Linear.desktop"
  install -Dm644 "$srcdir/linear-app-icon.png" "$pkgdir/usr/share/icons/hicolor/512x512/apps/linear-linux.png"
  install -Dm644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
