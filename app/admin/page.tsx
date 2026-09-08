import { saveConfigAction, resetConfigAction } from "./actions";
import { getConfig } from "@/lib/config";

export default async function AdminPage() {
  const config = getConfig();

  return (
    <div className="min-h-screen bg-stone-50 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-display text-3xl font-bold text-stone-950 mb-2">
          Admin Panel
        </h1>
        <p className="text-stone-600 mb-8">
          Tuỳ chỉnh toàn bộ nội dung và giao diện cho landing page.
        </p>

        <form action={saveConfigAction} className="space-y-8">
          {/* Links */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <h2 className="font-display text-xl font-bold text-stone-950 mb-4">Liên kết</h2>
            <div className="space-y-4">
              <Input label="Facebook" name="links.facebook" defaultValue={config.links.facebook} />
              <Input label="Zalo" name="links.zalo" defaultValue={config.links.zalo} />
            </div>
          </div>

          {/* Theme */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <h2 className="font-display text-xl font-bold text-stone-950 mb-4">Chủ đề màu sắc</h2>
            <div className="space-y-4">
              <Input label="Brand 950" name="theme.brand.950" defaultValue={config.theme.brand["950"]} />
              <Input label="Brand 900" name="theme.brand.900" defaultValue={config.theme.brand["900"]} />
              <Input label="Brand 800" name="theme.brand.800" defaultValue={config.theme.brand["800"]} />
              <Input label="Brand 700" name="theme.brand.700" defaultValue={config.theme.brand["700"]} />
              <Input label="Brand 600" name="theme.brand.600" defaultValue={config.theme.brand["600"]} />
              <Input label="Brand 500" name="theme.brand.500" defaultValue={config.theme.brand["500"]} />
              <Input label="Gold 500" name="theme.gold.500" defaultValue={config.theme.gold["500"]} />
              <Input label="Gold 600" name="theme.gold.600" defaultValue={config.theme.gold["600"]} />
              <Input label="Gold 700" name="theme.gold.700" defaultValue={config.theme.gold["700"]} />
              <Input label="Background" name="theme.background" defaultValue={config.theme.background} />
              <Input label="Surface" name="theme.surface" defaultValue={config.theme.surface} />
              <Input label="Text" name="theme.text" defaultValue={config.theme.text} />
              <Input label="Text Muted" name="theme.textMuted" defaultValue={config.theme.textMuted} />
              <Input label="Border" name="theme.border" defaultValue={config.theme.border} />
            </div>
          </div>

          {/* Hero */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <h2 className="font-display text-xl font-bold text-stone-950 mb-4">Hero Section</h2>
            <div className="space-y-4">
              <Textarea label="Headline" name="hero.headline" defaultValue={config.hero.headline} />
              <Textarea label="Subheadline" name="hero.subheadline" defaultValue={config.hero.subheadline} />
              <Input label="Ảnh hero (URL)" name="hero.image" defaultValue={config.hero.image} />
              <Input label="CTA Fanpage" name="hero.ctaFacebook" defaultValue={config.hero.ctaFacebook} />
              <Input label="CTA Zalo" name="hero.ctaZalo" defaultValue={config.hero.ctaZalo} />
            </div>
          </div>

          {/* Launcher */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <h2 className="font-display text-xl font-bold text-stone-950 mb-4">9flip Launcher</h2>
            <div className="space-y-4">
              <Input label="Tiêu đề" name="launcher.title" defaultValue={config.launcher.title} />
              <Textarea label="Mô tả" name="launcher.description" defaultValue={config.launcher.description} />
              <Input label="Ảnh mockup (URL)" name="launcher.image" defaultValue={config.launcher.image} />
              <Input label="CTA" name="launcher.cta" defaultValue={config.launcher.cta} />
              <p className="text-xs text-stone-500 mt-2">Features:</p>
              <Input label="Feature 1" name="launcher.feature0" defaultValue={config.launcher.features[0]?.text || ""} />
              <Input label="Feature 2" name="launcher.feature1" defaultValue={config.launcher.features[1]?.text || ""} />
              <Input label="Feature 3" name="launcher.feature2" defaultValue={config.launcher.features[2]?.text || ""} />
              <Input label="Feature 4" name="launcher.feature3" defaultValue={config.launcher.features[3]?.text || ""} />
            </div>
          </div>

          {/* Products */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <h2 className="font-display text-xl font-bold text-stone-950 mb-4">Sản phẩm</h2>
            {[1, 2, 3, 4, 5, 6].map((id) => (
              <div key={id} className="mb-6 pb-4 border-b border-stone-100 last:border-0">
                <h3 className="font-semibold text-stone-700 mb-3">Sản phẩm {id}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label={`Tên ${id}`} name={`product${id}.name`} defaultValue={config.products.find((p: any) => p.id === id)?.name || ""} />
                  <Textarea label={`Mô tả ${id}`} name={`product${id}.desc`} defaultValue={config.products.find((p: any) => p.id === id)?.desc || ""} />
                  <Input label={`Ảnh ${id} (URL)`} name={`product${id}.image`} defaultValue={config.products.find((p: any) => p.id === id)?.image || ""} />
                  <Input label={`Alt ${id}`} name={`product${id}.alt`} defaultValue={config.products.find((p: any) => p.id === id)?.alt || ""} />
                </div>
              </div>
            ))}
          </div>

          {/* Brand Story */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <h2 className="font-display text-xl font-bold text-stone-950 mb-4">Câu chuyện thương hiệu</h2>
            <div className="space-y-4">
              <Textarea label="Title" name="brandStory.title" defaultValue={config.brandStory.title} />
              <Textarea label="Description" name="brandStory.description" defaultValue={config.brandStory.description} />
              <Input label="Ảnh (URL)" name="brandStory.image" defaultValue={config.brandStory.image} />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input label="Stat 1 Value" name="brandStory.stat1.value" defaultValue={config.brandStory.stats[0]?.value || ""} />
                <Input label="Stat 1 Label" name="brandStory.stat1.label" defaultValue={config.brandStory.stats[0]?.label || ""} />
                <Input label="Stat 2 Value" name="brandStory.stat2.value" defaultValue={config.brandStory.stats[1]?.value || ""} />
                <Input label="Stat 2 Label" name="brandStory.stat2.label" defaultValue={config.brandStory.stats[1]?.label || ""} />
                <Input label="Stat 3 Value" name="brandStory.stat3.value" defaultValue={config.brandStory.stats[2]?.value || ""} />
                <Input label="Stat 3 Label" name="brandStory.stat3.label" defaultValue={config.brandStory.stats[2]?.label || ""} />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <h2 className="font-display text-xl font-bold text-stone-950 mb-4">CTA Section</h2>
            <div className="space-y-4">
              <Input label="Tiêu đề" name="cta.title" defaultValue={config.cta.title} />
              <Textarea label="Mô tả" name="cta.description" defaultValue={config.cta.description} />
              <Input label="CTA Fanpage" name="cta.ctaFacebook" defaultValue={config.cta.ctaFacebook} />
              <Input label="CTA Zalo" name="cta.ctaZalo" defaultValue={config.cta.ctaZalo} />
            </div>
          </div>

          {/* Footer */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <h2 className="font-display text-xl font-bold text-stone-950 mb-4">Footer</h2>
            <div className="space-y-4">
              <Input label="Copyright" name="footer.copyright" defaultValue={config.footer.copyright} />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="rounded-full bg-stone-950 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-stone-800"
            >
              Lưu thay đổi
            </button>
            <form action={resetConfigAction}>
              <button
                type="submit"
                className="rounded-full border-2 border-stone-300 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-stone-700 transition-all hover:bg-stone-100"
              >
                Đặt lại
              </button>
            </form>
          </div>
        </form>
      </div>
    </div>
  );
}

function Input({ label, name, defaultValue }: { label: string; name: string; defaultValue: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-stone-600 mb-1">{label}</label>
      <input
        type="text"
        name={name}
        defaultValue={defaultValue}
        className="w-full rounded-lg border border-stone-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
      />
    </div>
  );
}

function Textarea({ label, name, defaultValue }: { label: string; name: string; defaultValue: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-stone-600 mb-1">{label}</label>
      <textarea
        name={name}
        defaultValue={defaultValue}
        rows={3}
        className="w-full rounded-lg border border-stone-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
      />
    </div>
  );
}
