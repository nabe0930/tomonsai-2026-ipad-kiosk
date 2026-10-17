Fonts bundled for offline reception UI

Shippori Mincho 600 and Zen Kaku Gothic New 400/700:
Downloaded from the official Google Fonts CSS2 text subset endpoint on 2026-10-18 (Asia/Tokyo).
Subset contains 295 distinct characters from the fixed, public UI in the supplied design pages V01-V11. No reception ledger, names, payment data, authentication data, or PIN was sent.
Google Fonts provided the WOFF2 files; these local copies are used without an external font request at runtime.

Fragment Mono 400 latin:
Reused the WOFF2 font embedded in the supplied design. Official font project: https://github.com/weiweihuanghuang/fragment-mono

License: SIL Open Font License 1.1. Full official copyright and license notices are included in ShipporiMincho-OFL.txt, ZenKakuGothicNew-OFL.txt, and FragmentMono-OFL.txt.
Official license sources:
https://raw.githubusercontent.com/google/fonts/main/ofl/shipporimincho/OFL.txt
https://raw.githubusercontent.com/google/fonts/main/ofl/zenkakugothicnew/OFL.txt
https://raw.githubusercontent.com/google/fonts/main/ofl/fragmentmono/OFL.txt

Fallback recommendation:
Body: "Zen Kaku Gothic New", "Hiragino Sans", "Yu Gothic", sans-serif
Heading: "Shippori Mincho", "Hiragino Mincho ProN", "Yu Mincho", serif
Numbers: "Fragment Mono", ui-monospace, monospace
Characters outside the fixed subset fall through to the device fonts. Keep fallback stacks for errors, imported legacy receipt labels, and future additions.
All 4 WOFF2 files must be in the offline precache together with the CSS/index. No Google Fonts stylesheet link, @import, or gstatic reference should remain in the published app.
