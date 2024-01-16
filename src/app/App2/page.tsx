export default async function Page() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    return (
        <>
            <div className="font-bold text-3xl mb-5">Welcome App2</div>
            <div>
                This page is App2.
            </div>
        </>
    );
}