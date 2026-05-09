import { Pie, PieChart, Tooltip } from 'recharts';
import { useContext } from 'react';
import { FriendContext } from '../Context/UseContex';


// #endregion
export default function Grafic({ isAnimationActive = true }) {
    const { friendi } = useContext(FriendContext)
    const call = friendi.filter(friend => friend.btn === 'Call').length || []
    const text = friendi.filter(friend => friend.btn === 'Text').length || []
    const video = friendi.filter(friend => friend.btn === 'Video').length || []
    const data = [
        { name: 'Call', value: call, fill: '#244D3F' },
        { name: 'Text', value: text, fill: '#7F37F5' },
        { name: 'Video', value: video, fill: '#37A163' },
    ];
    return (
        <PieChart style={{ width: '100%', maxWidth: '340px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
            <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="10%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={isAnimationActive}
            />
            <Tooltip/>
        </PieChart>
    );
}