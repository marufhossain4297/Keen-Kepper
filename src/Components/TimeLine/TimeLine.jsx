import { MessageSquareText, Phone, TextAlignJustify, Video } from "lucide-react";

const TimeLine = () => {
    return (
        <div>
            <h2 className="mt-20 text-5xl font-bold mb-6">TimeLine</h2>
            <select defaultValue="Pick a color" className="select mb-6">
                <option><TextAlignJustify size={15} />All</option>

                <option><Phone size={15} />Call</option>

                <option> <MessageSquareText size={15} /> Text</option>

                <option><Video size={15} />Video</option>
            </select>
        </div>
    );
};

export default TimeLine;