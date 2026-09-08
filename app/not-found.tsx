export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-50 text-brand-950 text-center px-4">
      <div>
        <h1 className="font-display text-4xl mb-4">404</h1>
        <p className="text-brand-600 mb-8">Không tìm thấy trang này</p>
        <a href="/" className="btn-primary">Về trang chủ</a>
      </div>
    </div>
  );
}
