export default function canvasList() {
    const options = [
        {name: "Square (1:1)", value: "512_512"},
        {name: "Portrait (3:4)", value: "512_768"},
    ]

    return (
        <select className="rounded-md bg-input-main border-input-main px-3 py-2 bg-opacity-75">
            {
                options && options.map(option => {
                    return <option key={option.value} value={option.value}>{option.name}</option>
                })
            }
        </select>
    )
}