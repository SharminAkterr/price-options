import { LineChart, Line, XAxis, YAxis } from 'recharts';

const LIneCharts = () => {
    const mathMarks = [
        { id: 1, student: "Alice", marks: 33 },
        { id: 2, student: "Bob", marks: 70 },
        { id: 3, student: "Charlie", marks: 60 },
        { id: 4, student: "David", marks: 92 },
        { id: 5, student: "Eva", marks: 78 },
        { id: 6, student: "Frank", marks: 25 },
        { id: 7, student: "Grace", marks: 88 },
        { id: 8, student: "Hannah", marks: 75 },
        { id: 9, student: "Ian", marks: 80 },
        { id: 10, student: "Jasmine", marks: 95 }
    ];

    return (
        <div>
            <LineChart width={800} height={250} data={mathMarks}>
                <XAxis dataKey={'student'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="marks" stroke="black" />
            </LineChart>
        </div>
    );
};

export default LIneCharts;