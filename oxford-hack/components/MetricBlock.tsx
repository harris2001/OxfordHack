import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Area } from '@ant-design/plots';
import { get } from 'http';
import React from 'react';
import { useEffect, useState } from 'react';
import { json } from 'stream/consumers';
export default function MetricBlock(props: { metric: string}) {
    const { metric } = props;
    
    const [data, setData] = useState([{}]);
    const [value,setValue]=useState(0);
    
    return <div className="flex hover:bg-gray-200 flex-col items-center w-[30%] mt-1 rounded-lg shadow-lg bg-white ">
        <div className="text-xl font-bold text-gray-800">{metric}</div>
        <div className="flex flex-row text-s font-medium text-gray-500">
        {value}

          </div>
    </div>
    }