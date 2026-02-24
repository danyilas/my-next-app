import './style.css';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <main>
            <h1>ID страницы: {id}</h1>
            <p>Это пример страницы в Next.js  </p>
            <button className="button-style-class">
                Click
            </button>
        </main>
    );
}