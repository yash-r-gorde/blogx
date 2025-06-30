interface InputLabelType {
    label: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    type?: string;
}

export const InputLabel = ({ label, placeholder, onChange, type}: InputLabelType) => {
    return <div>
        <label className="block mb-2 text-md font-semibold">{label}</label>
        <input type={type || "text"} onChange={onChange} className="border border-gray-300 text-gray-900 text-md rounded-lg block w-sm p-2.5" placeholder={placeholder}/>
    </div>
}