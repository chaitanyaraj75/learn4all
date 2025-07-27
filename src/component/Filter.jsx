function Filter({ onFilter }) {
    const classes = ['Select', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
    const subjects = ['Select', 'Math', 'Science', 'English', 'History', 'Geography', 'Computer', 'Physics', 'Chemistry', 'Biology'];

    const handleFilter = (e) => {
        e.preventDefault();
        const classValue = e.target.class.value;
        const subjectValue = e.target.subject.value;
        onFilter({ class: classValue, subject: subjectValue });
    };

    return (
        <section className="bg-white shadow-md p-4 rounded-xl w-full max-w-3xl mx-auto mt-6">
            <form
                onSubmit={handleFilter}
                className="flex flex-col sm:flex-row sm:items-end gap-4"
            >
                <div className="flex-1">
                    <label
                        htmlFor="class"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Select Class:
                    </label>
                    <select
                        name="class"
                        id="class"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {classes.map((cls, index) => (
                            <option key={index} value={cls}>
                                {cls}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex-1">
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Select Subject:
                    </label>
                    <select
                        name="subject"
                        id="subject"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {subjects.map((sub, index) => (
                            <option key={index} value={sub}>
                                {sub}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-5 rounded-md transition duration-200"
                    >
                        🔍 Filter
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Filter;
