export default function Page() {
    const users = [
        { id: 1, name: 'Dana' },
        { id: 2, name: 'Banana'  },
    ];
    return (
        <main>
            <h1>Главная страница</h1>
            <ul>
                {users.map(user => (
                    <p key={user.id}> {user.id}) {user.name}</p>
                ))}
            </ul>
        </main>
    );
}