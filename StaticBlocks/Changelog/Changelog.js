'use client'
import { useIntl } from "react-intl"
import React from 'react'
import Link from "next/link.js"
import Release from "./Release/Release.js"
import styles from "./Changelog.module.scss"
import "../../_globals.js"

export default function Changelog() {
    const intl = useIntl();
    const releases_location_text = intl.formatMessage({ id: "releases_location_text" });

    let releases = [
        {'title' : '1.4.7', 
         'changes' : ['1_4_7_cores_load', 
                      '1_4_7_max_values',
                      '1_4_7_version_number',
                      '1_4_7_debug_stack',
                      '1_4_7_support',
                     ]
        },
        {'title' : '1.4.6', 
         'changes' : ['1_4_6_update_LHMLib', 
                     '1_4_6_statistics_recording',
                     '1_4_6_cpu_load_not_updates',
                     '1_4_6_autostart_crushing',
                     '1_4_6_min_max_reset',
                     '1_4_6_incorrect_max_values',
                    ]
       },
       {'title' : '1.4.5', 
        'changes' : ['1_4_5_debug', 
                    '1_4_5_settings_not_apply',
                    '1_4_5_minimal_states',
                    '1_4_5_doubled_run',
                    '1_4_5_clear_buttons',
                    '1_4_5_cpu_settings_not_resetings',
                    '1_4_5_UI_updates',
                    '1_4_5_change_defaults',
                    '1_4_5_tray_icon_updates',
                    '1_4_5_legacy',
                   ]
       },
       {'title' : '1.4.4', 
        'changes' : ['1_4_4_crushes']
       }
    ]

    function getReleasesArray() {
        return releases;
    }

    return (
        <div className={styles.wrapper}>
            <div className={[styles.columns, styles.one].join(' ')}>
                <div className={styles.release_description}>
                    {getReleasesArray().map((release, index) => (
                        <Release key = {index}
                                 title={release.title} 
                                 description={release.description}
                                 changes={release.changes}
                                 ps={release.ps}/>
                    ))}
                </div>
            </div>
            <p className={styles.all_releases}>{releases_location_text} <Link href="https://github.com/treepoint/AveTemp/releases">Github</Link>.</p>
        </div>
    );
}