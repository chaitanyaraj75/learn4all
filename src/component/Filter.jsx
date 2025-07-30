function Filter(props) {
    const classes = ['Select', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    const subjects = ['Select', 'Mathematics','Hindi', 'Science', 'English', 'History', 'Geography', 'Computer', 'Physics', 'Chemistry', 'Biology'];

    const handleFilter = (e) => {
        e.preventDefault();
        const classValue = e.target.class.value;
        const subjectValue = e.target.subject.value;
        props.onclicked(classValue, subjectValue);
    };

    return (
        <section className="bg-[#1e1e2f] text-white shadow-lg p-6 rounded-2xl w-full max-w-4xl mx-auto mt-10">
            <form
                onSubmit={handleFilter}
                className="flex flex-col sm:flex-row sm:items-end gap-6"
            >
                <div className="flex-1">
                    <label
                        htmlFor="class"
                        className="block text-sm font-medium text-gray-200 mb-1"
                    >
                        Select Class:
                    </label>
                    <select
                        name="class"
                        id="class"
                        className="w-full bg-[#2a2a40] border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    >
                        {classes.map((cls, index) => (
                            <option key={index} value={(cls === 'Select' ? '' : cls)} className="text-black">
                                {cls}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex-1">
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-200 mb-1"
                    >
                        Select Subject:
                    </label>
                    <select
                        name="subject"
                        id="subject"
                        className="w-full bg-[#2a2a40] border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    >
                        {subjects.map((sub, index) => (
                            <option key={index} value={(sub === 'Select' ? '' : sub)} className="text-black">
                                {sub}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mt-1 sm:mt-0">
                    <button
                        type="submit"
                        className="bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm py-2 px-6 rounded-lg transition duration-200 shadow-md"
                    >
                        🔍 Filter
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Filter;
