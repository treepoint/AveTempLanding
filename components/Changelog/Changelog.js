'use client';
import { useIntl } from "react-intl";
import React from 'react';
import Release from "../Release/Release.js";
import "../../_globals.js";

function Changelog(props) {
    const [isSpoilerOpened, setSpoiler] = React.useState(false);

    const intl = useIntl();
    const changelog_headline = intl.formatMessage({ id: "changelog_headline" });
    const releases_location_text = intl.formatMessage({ id: "releases_location_text" });
    const show_more = intl.formatMessage({ id: "show_more" });

    function setSpoilerOpened() {
        if (!isSpoilerOpened) {
            setSpoiler(true);
        }
    }

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
       },
       {'title' : '1.4.3', 
        'changes' : ['1_4_3_notifications', 
                    '1_4_3_admin_right_description',
                    '1_4_3_clear_icons',
                    '1_4_3_name_and_version_link',
                    '1_4_3_tray_localization',
                    '1_4_3_closing_correctly',
                    '1_4_3_cpu_name',
                   ]
       },
       {'title' : '1.4.2', 
        'changes' : ['1_4_2_autostart_delay', 
                    '1_4_2_backup_interval',
                    '1_4_2_intel_cpu_names',
                    '1_4_2_not_closed_by_enter',
                    '1_4_2_minimum_value',
                   ]
       },
       {'title' : '1.4.1', 
        'changes' : ['1_4_1_separated_cpu_method', 
                    '1_4_1_settings_translation',
                    '1_4_1_pause_before_autostart',
                    '1_4_1_not_ovveriding_settings',
                    '1_4_1_decrease_backup_interval',
                    '1_4_1_properly_closed',
                   ]
       },
       {'title' : '1.4.0', 
        'changes' : ['1_4_0_localization']
       },
       {'title' : '1.3.2',
        'description': '1_3_2_disclaimer', 
        'changes' : ['1_3_2_issue_8', 
                     '1_3_2_issue_10',
                     '1_3_2_issue_12',
                     '1_3_2_optimization',
                     '1_3_2_added_check',
                     '1_3_2_refactoring',
                   ]
       },
       {'title' : '1.3.1',
        'changes' : ['1_3_1_tray_icon', 
                     '1_3_1_data_collect',
                   ]
       },
       {'title' : '1.3.0',
       'changes' : ['1_3_0_turbo', 
                    '1_3_0_autostart',
                    '1_3_0_realy_appying',
                    '1_3_0_current_scheme',
                    '1_3_0_refactoring',
                   ]
       },
       {'title' : '1.2.2',
       'changes' : ['1_2_2_cpu_performance', 
                    '1_2_2_basic_intel_support',
                    '1_2_2_changed_icons_format',
                    '1_2_2_reduced_cpu_usage',
                   ],
        'ps' : '1_2_2_tested_on',
       },
       {'title' : '1.0.1',
       'changes' : ['1_0_1_text']
       },
    ]

    function getReleasesArray() {
       if (!isSpoilerOpened) {
            return releases.slice(0,2)
       } else {
            return releases;
       }
    }

    function getShowMoreStyles() {
        let classes = [props.styles.anchor_link]

        if (isSpoilerOpened) {
            classes.push(props.styles.hidden);
        }

       return classes.join(' ')
    }

    return (
        <div className={props.styles.screen}>
            <div className={[props.styles.columns, props.styles.one].join(' ')}>
                <h2 id="changelog">{changelog_headline}</h2>
                <p>{releases_location_text} <a href="https://github.com/treepoint/AveTemp/releases" target="_blank" rel="noopener, noreferrer">Github</a></p>
            
                <div className={props.styles.release_description}>
                    {getReleasesArray().map((release, index) => (
                        <Release key = {index}
                                styles={props.styles} 
                                title={release.title} 
                                description={release.description}
                                changes={release.changes}
                                ps={release.ps}/>
                    ))}
                </div>

                <a className={getShowMoreStyles()} onClick={setSpoilerOpened}>{show_more}</a>
            </div>
        </div>
    );
}

export default Changelog;