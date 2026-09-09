import { getConfig } from "@/lib/config";
import { saveConfigAction, resetConfigAction } from "./actions";

export default async function AdminPage() {
  const config = await getConfig();
  
  // Safe accessor to prevent undefined errors
  const getProduct = (id: number) => {
    if (Array.isArray(config.products)) {
      return config.products.find((p: any) => p.id === id);
    } else if (config.products && Array.isArray(config.products.items)) {
      return config.products.items.find((p: any) => p.id === id);
    }
    return null;
  };

  const layout = config.layout || {};

  return (
    <div className="min-h-screen bg-stone-50 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-display text-3xl font-bold text-stone-950 mb-8">Mixed Technology Admin Panel</h1>
        
        <form action={saveConfigAction} className="space-y-8">
          
          {/* Layout & Sizing */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <h2 className="font-display text-xl font-bold text-stone-950 mb-4">Layout & Typography Sizes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Nav Height (e.g. 72px)" name="layout.navHeight" defaultValue={layout.navHeight || "72px"} />
              <Input label="Hero Min Height (e.g. 100svh)" name="layout.heroHeight" defaultValue={layout.heroHeight || "100svh"} />
              <Input label="Base Font Size (e.g. 16px)" name="layout.baseFontSize" defaultValue={layout.baseFontSize || "16px"} />
              <Input label="Font Family (e.g. var(--font-inter))" name="layout.fontFamily" defaultValue={layout.fontFamily || "var(--font-geist-sans)"} />
              <Input label="Product Image Ratio (e.g. 4/3, 16/9, 1)" name="layout.productAspectRatio" defaultValue={layout.productAspectRatio || "4/3"} />
            </div>
          </div>

          {/* Links */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <h2 className="font-display text-xl font-bold text-stone-950 mb-4">Social Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Facebook URL" name="links.facebook" defaultValue={config.links?.facebook || ''} />
              <Input label="Zalo URL" name="links.zalo" defaultValue={config.links?.zalo || ''} />
            </div>
          </div>

          {/* Theme */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <h2 className="font-display text-xl font-bold text-stone-950 mb-4">Theme Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Input label="Brand 950" name="theme.brand.950" defaultValue={config.theme?.brand?.["950"] || ''} />
              <Input label="Background" name="theme.background" defaultValue={config.theme?.background || ''} />
            </div>
          </div>

          {/* Hero */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <h2 className="font-display text-xl font-bold text-stone-950 mb-4">Hero Section</h2>
            <div className="space-y-4">
              <Textarea label="Headline" name="hero.headline" defaultValue={config.hero?.headline || ''} />
              <Textarea label="Subheadline" name="hero.subheadline" defaultValue={config.hero?.subheadline || ''} />
              <Input label="CTA" name="hero.cta" defaultValue={config.hero?.cta || ''} />
            </div>
          </div>

          {/* Launcher */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <h2 className="font-display text-xl font-bold text-stone-950 mb-4">9flip Launcher</h2>
            <div className="space-y-4">
              <Input label="Title" name="launcher.title" defaultValue={config.launcher?.title || ''} />
              <Textarea label="Description" name="launcher.description" defaultValue={config.launcher?.description || ''} />
              <Input label="CTA" name="launcher.cta" defaultValue={config.launcher?.cta || ''} />
            </div>
          </div>

          {/* Products */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <h2 className="font-display text-xl font-bold text-stone-950 mb-4">Products</h2>
            {[1, 2, 3, 4, 5, 6].map((id) => {
              const p = getProduct(id);
              return (
                <div key={id} className="mb-6 pb-4 border-b border-stone-100 last:border-0">
                  <h3 className="font-semibold text-stone-700 mb-3">Product {id}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label={"Name "} name={"product\.name"} defaultValue={p?.name || ""} />
                    <Textarea label={"Description "} name={"product\.desc"} defaultValue={p?.desc || ""} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Brand Story */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <h2 className="font-display text-xl font-bold text-stone-950 mb-4">Brand Story</h2>
            <div className="space-y-4">
              <Textarea label="Title" name="brandStory.title" defaultValue={config.brandStory?.title || ''} />
              <Textarea label="Description" name="brandStory.description" defaultValue={config.brandStory?.description || ''} />
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <h2 className="font-display text-xl font-bold text-stone-950 mb-4">CTA Section</h2>
            <div className="space-y-4">
              <Input label="Title" name="cta.title" defaultValue={config.cta?.title || ''} />
              <Textarea label="Description" name="cta.description" defaultValue={config.cta?.description || ''} />
            </div>
          </div>

          {/* Footer */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <h2 className="font-display text-xl font-bold text-stone-950 mb-4">Footer</h2>
            <div className="space-y-4">
              <Input label="Copyright" name="footer.copyright" defaultValue={config.footer?.copyright || ''} />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="rounded-full bg-stone-950 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-stone-800"
            >
              Save Changes
            </button>
            <form action={resetConfigAction}>
              <button
                type="submit"
                className="rounded-full border-2 border-stone-300 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-stone-700 transition-all hover:bg-stone-100"
              >
                Reset
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