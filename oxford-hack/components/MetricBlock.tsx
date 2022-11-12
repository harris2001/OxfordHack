import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Area } from '@ant-design/plots';
import { get } from 'http';
import { useEffect, useState } from 'react';
import { json } from 'stream/consumers';
export default function MetricBlock(props: { metric: string}) {
    const { metric } = props;
    
    const [data, setData] = useState([{}]);
    const [value,setValue]=useState(0);

    useEffect(() => {
    // asyncFetch();
    let list=[{"time": "2001 Q3","value": 1.2},{"time": "2001 Q3","value": 1},{"time": "2002 Q3","value": 1.5},{"time": "2005 Q3","value": 1.9}]
    setData(list)
  }, []);

  const asyncFetch = () => {
  }
      
  // };

  function progress () {
    let list=data.slice(-3)
    const beg=list[0] 
    const end=list[list.length-1]
    console.log(beg)
    // if(beg["value"]>end["value"] ){
    //    const result=end["value"]/beg["value"]
    //   return <div className='flex flex-row text-green-600' >
    //     <CaretUpOutlined />
    //     {result.toFixed(1)}
    //     <p>%</p>
    //      </div>
    // }
    // else{
    //   const result=beg["value"]/end["value"]
    //   return <div className='flex flex-row text-red-600' >
    //     <CaretDownOutlined />
    //     {result.toFixed(1)}
    //     <p>%</p>
    //      </div>
    // }
return <><p>jello</p></>
  }

  const config = {
    data,
    xField: 'time',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
    
  };
    
    return <div className="flex flex-col items-center w-52 h-52 rounded-lg shadow-lg bg-white m-3">
        <div className="text-xl mt-5 font-bold text-gray-800">{metric}</div>
        <div className="flex flex-row text-s font-medium text-gray-500">
        {value}
        {progress()}
          </div>
        <Area className='w-11/12 h-2/12'{...config}/></div>
    }