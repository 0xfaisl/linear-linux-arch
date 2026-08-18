pkgname=linear-linux-arch
pkgver=1
pkgrel=2
pkgdesc='Linear desktop launcher for Linux'
arch=('any')
url='https://linear.app'
license=('Apache-2.0')
depends=('chromium')
provides=('linear-linux')
conflicts=('linear-linux')
source=(
  'linear-linux'
  'manifest.json'
  'stay-in-app.js'
  'linear-linux.desktop'
  'LICENSE'
  'linear-app-icon.png'
)
sha256sums=(
  '1997d39c4abf18886257021e25552aa56b536d9e917ff412dcea51fb745ecbfb'
  '7f9596583e556ea03d7efc40ca43e0d38bcfb018e63eb425afb5b3244e5eeb66'
  '4499b0fcf27747c5d3ab5e3333ada94d65f0400838730d8964794d885a6bc386'
  'b823448eeb1f038b754e4dd9c21849e5d695ac9b110c9fa2dfecf246b1f4990f'
  'c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4'
  'a58c531ffaac3b8ff9d86a9446bdbc54f61f95026e3274dc6b864b692000ad37'
)

package() {
  install -Dm755 "$srcdir/linear-linux" "$pkgdir/usr/bin/linear-linux"
  install -Dm644 "$srcdir/manifest.json" "$pkgdir/usr/share/linear-linux/extension/manifest.json"
  install -Dm644 "$srcdir/stay-in-app.js" "$pkgdir/usr/share/linear-linux/extension/stay-in-app.js"
  install -Dm644 "$srcdir/linear-linux.desktop" "$pkgdir/usr/share/applications/Linear.desktop"
  install -Dm644 "$srcdir/linear-app-icon.png" "$pkgdir/usr/share/icons/hicolor/512x512/apps/linear-linux.png"
  install -Dm644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
