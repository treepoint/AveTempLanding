'use client'
import { useIntl } from "react-intl"
import Screen from "../../elements/Screen/Screen"

import styles from './RoadMap.module.scss'

export default function RoadMapScreen(props) {

    const intl = useIntl();

    const road_map = intl.formatMessage({ id: "road_map" });

    const r_map_1 = intl.formatMessage({ id: "r_map_1" });
    const r_map_2 = intl.formatMessage({ id: "r_map_2" });
    const r_map_3 = intl.formatMessage({ id: "r_map_3" });

    const r_map_task_1_name = intl.formatMessage({ id: "r_map_task_1_name" });
    const r_map_task_1_hint = intl.formatMessage({ id: "r_map_task_1_hint" });
  
    const r_map_task_2_name = intl.formatMessage({ id: "r_map_task_2_name" });
    const r_map_task_2_hint = intl.formatMessage({ id: "r_map_task_2_hint" });
  
    const r_map_task_3_name = intl.formatMessage({ id: "r_map_task_3_name" });
    const r_map_task_3_hint = intl.formatMessage({ id: "r_map_task_3_hint" });
  
    const r_map_task_4_name = intl.formatMessage({ id: "r_map_task_4_name" });
    const r_map_task_4_hint = intl.formatMessage({ id: "r_map_task_4_hint" });

    function getContent() {
        return <>
        <p>{r_map_1}</p>
        <p>{r_map_2}</p>
        <p>{r_map_3}</p>
        </>
    }

    function getSecondContent() {
        let tasks = [
            {
             name: r_map_task_1_name, 
             hint: r_map_task_1_hint
            },
            {
             name: r_map_task_2_name, 
             hint: r_map_task_2_hint,  
            },
            {
             name: r_map_task_3_name, 
             hint: r_map_task_3_hint,  
            },
            {
             name: r_map_task_4_name, 
             hint: r_map_task_4_hint,  
            }
        ]

        return (
        <>
            <ul>
                {tasks.map(task => {
                    return (
                        <>
                            <li className={styles.li}>{task.name}</li>
                            <p className={styles.hint}>{task.hint}</p>
                        </>
                    )
                })}
            </ul>
        </>
        );
    }

    return (<Screen name={"roadmap"} 
            h2={road_map} 
            columns={2} 
            reverse={!props.isReverse ? true : false} 
            main_content={getContent()}
            second_content={getSecondContent()}
            />
        );
}