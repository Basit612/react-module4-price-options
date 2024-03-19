import { LineChart as LChart, Line, XAxis, YAxis} from 'recharts';

const LineChart = () => {

  const studentMarksData = [
    { 
      student: "Alice", 
      mathMarks: 85, 
      physicsMarks: 78, 
      chemistryMarks: 90 
    },
    { 
      student: "Bob", 
      mathMarks: 70, 
      physicsMarks: 72, 
      chemistryMarks: 85 
    },
    { 
      student: "Charlie", 
      mathMarks: 92, 
      physicsMarks: 88, 
      chemistryMarks: 94 
    },
    { 
      student: "David", 
      mathMarks: 78, 
      physicsMarks: 75, 
      chemistryMarks: 80 
    },
    { 
      student: "Emma", 
      mathMarks: 88, 
      physicsMarks: 84, 
      chemistryMarks: 92 
    },
    { 
      student: "Frank", 
      mathMarks: 65, 
      physicsMarks: 60, 
      chemistryMarks: 70 
    },
    { 
      student: "Grace", 
      mathMarks: 75, 
      physicsMarks: 68, 
      chemistryMarks: 82 
    },
    { 
      student: "Hannah", 
      mathMarks: 90, 
      physicsMarks: 85, 
      chemistryMarks: 92 
    },
    { 
      student: "Ian", 
      mathMarks: 82, 
      physicsMarks: 78, 
      chemistryMarks: 85 
    },
    { 
      student: "Jane", 
      mathMarks: 95, 
      physicsMarks: 92, 
      chemistryMarks: 98 
    }
  ];

  return (
    <div>
      <LChart width={1000} height={400} data={studentMarksData}>
        <XAxis dataKey={"name"}/>
        <YAxis></YAxis>
        <Line dataKey='mathMarks' stroke='red'></Line>
        <Line dataKey='physicsMarks' stroke='yellow'></Line>
      </LChart>
    </div>
  );
};

export default LineChart;