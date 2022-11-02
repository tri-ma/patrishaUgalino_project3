const Form = () => {
    return (
        <section className="wrapper form">
            <form action="GET">
                <div className="flex1">
                    <label htmlFor="">Task name</label>
                    <input type="text" placeholder="task name" className="taskName"/>

                    <div className="flex2">
                        <label htmlFor="">Date due</label>
                        <input type="date" />

                        <label htmlFor="">Time due</label>
                        <input type="time" />
                        
                        <label htmlFor="taskCategory">Task category</label>
                        <select name="taskCategory" id="taskCategory">
                            <option value="placeholder">What kind of task is this?</option>
                            <option value="">Personal</option>
                            <option value="">Bills</option>
                            <option value="">Work</option>
                            <option value="">School</option>
                        </select>
                    </div>
                </div>

                <button className="addTask">+</button>
            </form>
        </section>
    )
}

export default Form;