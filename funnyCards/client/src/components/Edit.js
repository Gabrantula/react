export default function Edit() {
    return (
        <section id="edit-page">
        <div className="form">
            <form className="edit-form">
                <h2>Edit your card</h2>
                <p>Animal image</p>
                <input type="text" name="imageUrl" placeholder="Animal image" />
                <p>Title</p>
                <input type="text" name="title" placeholder="Title" />
                <p>Description</p>
                <textarea name="description" placeholder="Description"></textarea>
                <div>
                    <button type="submit">Edit</button>
                </div>
            </form>
        </div>
    </section>
    )
}