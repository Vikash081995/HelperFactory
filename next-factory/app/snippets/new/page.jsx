export default function SnippetCreatePage(){
    return(
      <form>
        <h3>Create a snippet</h3>
        <div>
            <div>
                <label htmlFor="title">Title</label>
                <input name='title' />
            </div>
            <div>
                <label htmlFor='code'>Code</label>
                <textarea name='code' id='code'/>
            </div>
            <button type='submit'>Create</button>
        </div>
      </form>
    )
}