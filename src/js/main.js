Menu.main = {
    type: 'main',
    appearanceKey: 'home',
    on: {
        change: update
    },

    section: {
        type: 'section',

        only_on_this_website: {
            type: 'button',
            label: 'onlyEnableForThisWebsite',
            onclick: function() {
                var websites = Satus.storage.get('websites');

                for (var key in websites) {
                    if (key != HOSTNAME) {
                        Satus.storage.set('websites/' + key + '/enabled', false);
                        Satus.storage.set('websites/' + key + '/exclude_this_website', true);
                    } else {
                        Satus.storage.set('websites/' + key + '/enabled', true);
                        Satus.storage.set('websites/' + key + '/exclude_this_website', false);
                        document.querySelector('#exclude').dataset.value = false;
                    }
                }
            }
        },
        exclude_this_website: {
            type: 'switch',
            label: 'excludeThisWebsite'
        },
        filters: {
            type: 'folder',
            label: 'filters',
            before: '<svg viewBox="0 0 24 24"><path d="M17.66 7.93L12 2.27 6.34 7.93a8 8 0 1 0 11.32 0zM12 19.59c-1.6 0-3.11-.62-4.24-1.76a5.95 5.95 0 0 1 0-8.48L12 5.1v14.49z"></svg>',

            section: {
                type: 'section',

                invert_colors: {
                    label: 'invertColors',
                    type: 'switch',
                    value: true
                },
                bluelight: {
                    label: 'bluelight',
                    type: 'slider',
                    max: 90
                },
                brightness: {
                    label: 'brightness',
                    type: 'slider',
                    max: 100,
                    value: 100
                },
                contrast: {
                    label: 'contrast',
                    type: 'slider',
                    max: 100,
                    value: 100
                },
                grayscale: {
                    label: 'grayscale',
                    type: 'slider',
                    max: 100
                },
                sepia: {
                    label: 'sepia',
                    type: 'slider',
                    max: 100
                }
            }
        },
        styles: {
            type: 'folder',
            label: 'styles',
            before: '<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></svg>',

            styles: {
                type: 'text-field',
                placeholder: 'html, body { ... }',
                style: {
                    margin: '16px',
                    height: 'calc(100vh - 96px)',
                    fontFamily: 'monospace'
                },
                on: {
                    render: function(element) {
                        element.value = Satus.storage.get('websites/' + HOSTNAME + '/styles') || '';
                    },
                    input: function() {
                        Satus.storage.set('websites/' + HOSTNAME + '/styles', this.value);
                    }
                }
            }
        },
        websites: {
            type: 'folder',
            label: 'websites',
            before: '<svg viewBox="0 0 24 24"><path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"></svg>'
        },
        schedule: {
            type: 'folder',
            label: 'schedule',
            before: '<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path fill="none" d="M0 0h24v24H0z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>',

            schedule: {
                type: 'select',
                label: 'schedule',

                options: [{
                    label: 'disabled',
                    value: 'disabled'
                }, {
                    label: 'sunsetToSunrise',
                    value: 'sunset_to_sunrise'
                }, {
                    label: 'systemPeference',
                    value: 'system_peference'
                }]
            },
            time_from: {
                type: 'select',
                label: 'timeFrom',
                options: [{
                    label: '00:00',
                    value: '00:00'
                }, {
                    label: '01:00',
                    value: '01:00'
                }, {
                    label: '02:00',
                    value: '02:00'
                }, {
                    label: '03:00',
                    value: '03:00'
                }, {
                    label: '04:00',
                    value: '04:00'
                }, {
                    label: '05:00',
                    value: '05:00'
                }, {
                    label: '06:00',
                    value: '06:00'
                }, {
                    label: '07:00',
                    value: '07:00'
                }, {
                    label: '08:00',
                    value: '08:00'
                }, {
                    label: '09:00',
                    value: '09:00'
                }, {
                    label: '10:00',
                    value: '10:00'
                }, {
                    label: '11:00',
                    value: '11:00'
                }, {
                    label: '12:00',
                    value: '12:00'
                }, {
                    label: '13:00',
                    value: '13:00'
                }, {
                    label: '14:00',
                    value: '14:00'
                }, {
                    label: '15:00',
                    value: '15:00'
                }, {
                    label: '16:00',
                    value: '16:00'
                }, {
                    label: '17:00',
                    value: '17:00'
                }, {
                    label: '18:00',
                    value: '18:00'
                }, {
                    label: '19:00',
                    value: '19:00'
                }, {
                    label: '20:00',
                    value: '20:00'
                }, {
                    label: '21:00',
                    value: '21:00'
                }, {
                    label: '22:00',
                    value: '22:00'
                }, {
                    label: '23:00',
                    value: '23:00'
                }]
            },
            time_to: {
                type: 'select',
                label: 'timeTo',
                options: [{
                    label: '00:00',
                    value: '00:00'
                }, {
                    label: '01:00',
                    value: '01:00'
                }, {
                    label: '02:00',
                    value: '02:00'
                }, {
                    label: '03:00',
                    value: '03:00'
                }, {
                    label: '04:00',
                    value: '04:00'
                }, {
                    label: '05:00',
                    value: '05:00'
                }, {
                    label: '06:00',
                    value: '06:00'
                }, {
                    label: '07:00',
                    value: '07:00'
                }, {
                    label: '08:00',
                    value: '08:00'
                }, {
                    label: '09:00',
                    value: '09:00'
                }, {
                    label: '10:00',
                    value: '10:00'
                }, {
                    label: '11:00',
                    value: '11:00'
                }, {
                    label: '12:00',
                    value: '12:00'
                }, {
                    label: '13:00',
                    value: '13:00'
                }, {
                    label: '14:00',
                    value: '14:00'
                }, {
                    label: '15:00',
                    value: '15:00'
                }, {
                    label: '16:00',
                    value: '16:00'
                }, {
                    label: '17:00',
                    value: '17:00'
                }, {
                    label: '18:00',
                    value: '18:00'
                }, {
                    label: '19:00',
                    value: '19:00'
                }, {
                    label: '20:00',
                    value: '20:00'
                }, {
                    label: '21:00',
                    value: '21:00'
                }, {
                    label: '22:00',
                    value: '22:00'
                }, {
                    label: '23:00',
                    value: '23:00'
                }]
            }
        }
    },

    made_with_love: {
        type: 'text',
        class: 'made-with-love',
        innerHTML: 'Made with <svg viewBox="0 0 24 24"><path d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"></svg> by <span>ImprovedTube</span>',
        on: {
            click: function() {
                window.open('https://chrome.google.com/webstore/detail/improve-youtube-open-sour/bnomihfieiccainjcjblhegjgglakjdd');
            }
        }
    }
};

/*Menu.main = {
    type: 'main',

    only_on_this_website: {
        type: 'button',
        label: 'onlyEnableForThisWebsite',
        onclick: function() {
            var websites = Satus.storage.get('websites');

            for (var key in websites) {
                if (key != HOSTNAME) {
                    Satus.storage.set('websites/' + key + '/enabled', false);
                    Satus.storage.set('websites/' + key + '/exclude_this_website', true);
                } else {
                    Satus.storage.set('websites/' + key + '/enabled', true);
                    Satus.storage.set('websites/' + key + '/exclude_this_website', false);
                    document.querySelector('#exclude').dataset.value = false;
                }
            }
        }
    },
    exclude_this_website: {
        type: 'switch',
        label: 'excludeThisWebsite',
        storage: 'websites/' + HOSTNAME,
        id: 'exclude',
        onchange: function(key, value) {
            Satus.storage.set('websites/' + HOSTNAME + '/enabled', value == 'true' ? false : true);
        }
    },

    filters: {
        type: 'folder',
        label: 'filters',
        icon: '<svg viewBox="0 0 24 24"><path d="M17.66 7.93L12 2.27 6.34 7.93a8 8 0 1 0 11.32 0zM12 19.59c-1.6 0-3.11-.62-4.24-1.76a5.95 5.95 0 0 1 0-8.48L12 5.1v14.49z"></svg>',

        invert_colors: {
            label: 'invertColors',
            type: 'switch',
            storage: 'websites/' + HOSTNAME + '/filters',
            value: true
        },
        bluelight: {
            label: 'bluelight',
            type: 'slider',
            storage: 'websites/' + HOSTNAME + '/filters',
            max: 90
        },
        brightness: {
            label: 'brightness',
            type: 'slider',
            storage: 'websites/' + HOSTNAME + '/filters',
            max: 100,
            value: 100
        },
        contrast: {
            label: 'contrast',
            type: 'slider',
            storage: 'websites/' + HOSTNAME + '/filters',
            max: 100,
            value: 100
        },
        grayscale: {
            label: 'grayscale',
            type: 'slider',
            storage: 'websites/' + HOSTNAME + '/filters',
            max: 100
        },
        sepia: {
            label: 'sepia',
            type: 'slider',
            storage: 'websites/' + HOSTNAME + '/filters',
            max: 100
        }
    },
    styles: {
        type: 'folder',
        icon: '<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></svg>',

        styles: {
            type: 'textarea',
            placeholder: 'html, body { ... }',
            style: {
                margin: '16px',
                height: 'calc(100vh - 96px)',
                fontFamily: 'monospace'
            },
            on: {
                render: function(element) {
                    element.value = Satus.storage.get('websites/' + HOSTNAME + '/styles') || '';
                },
                input: function() {
                    Satus.storage.set('websites/' + HOSTNAME + '/styles', this.value);
                }
            }
        }
    },
    websites: {
        type: 'folder',
        label: 'websites',
        icon: '<svg viewBox="0 0 24 24"><path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"></svg>'
    },
    schedule: {
        type: 'folder',
        label: 'schedule',
        icon: '<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path fill="none" d="M0 0h24v24H0z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>',

        schedule: {
            type: 'select',

            options: [{
                label: 'disabled',
                value: 'disabled'
            }, {
                label: 'sunsetToSunrise',
                value: 'sunset_to_sunrise'
            }, {
                label: 'systemPeference',
                value: 'system_peference'
            }]
        },

        time_from: {
            type: 'select',
            label: 'timeFrom',
            options: [{
                label: '00:00',
                value: '00:00'
            }, {
                label: '01:00',
                value: '01:00'
            }, {
                label: '02:00',
                value: '02:00'
            }, {
                label: '03:00',
                value: '03:00'
            }, {
                label: '04:00',
                value: '04:00'
            }, {
                label: '05:00',
                value: '05:00'
            }, {
                label: '06:00',
                value: '06:00'
            }, {
                label: '07:00',
                value: '07:00'
            }, {
                label: '08:00',
                value: '08:00'
            }, {
                label: '09:00',
                value: '09:00'
            }, {
                label: '10:00',
                value: '10:00'
            }, {
                label: '11:00',
                value: '11:00'
            }, {
                label: '12:00',
                value: '12:00'
            }, {
                label: '13:00',
                value: '13:00'
            }, {
                label: '14:00',
                value: '14:00'
            }, {
                label: '15:00',
                value: '15:00'
            }, {
                label: '16:00',
                value: '16:00'
            }, {
                label: '17:00',
                value: '17:00'
            }, {
                label: '18:00',
                value: '18:00'
            }, {
                label: '19:00',
                value: '19:00'
            }, {
                label: '20:00',
                value: '20:00'
            }, {
                label: '21:00',
                value: '21:00'
            }, {
                label: '22:00',
                value: '22:00'
            }, {
                label: '23:00',
                value: '23:00'
            }]
        },
        time_to: {
            type: 'select',
            label: 'timeTo',
            options: [{
                label: '00:00',
                value: '00:00'
            }, {
                label: '01:00',
                value: '01:00'
            }, {
                label: '02:00',
                value: '02:00'
            }, {
                label: '03:00',
                value: '03:00'
            }, {
                label: '04:00',
                value: '04:00'
            }, {
                label: '05:00',
                value: '05:00'
            }, {
                label: '06:00',
                value: '06:00'
            }, {
                label: '07:00',
                value: '07:00'
            }, {
                label: '08:00',
                value: '08:00'
            }, {
                label: '09:00',
                value: '09:00'
            }, {
                label: '10:00',
                value: '10:00'
            }, {
                label: '11:00',
                value: '11:00'
            }, {
                label: '12:00',
                value: '12:00'
            }, {
                label: '13:00',
                value: '13:00'
            }, {
                label: '14:00',
                value: '14:00'
            }, {
                label: '15:00',
                value: '15:00'
            }, {
                label: '16:00',
                value: '16:00'
            }, {
                label: '17:00',
                value: '17:00'
            }, {
                label: '18:00',
                value: '18:00'
            }, {
                label: '19:00',
                value: '19:00'
            }, {
                label: '20:00',
                value: '20:00'
            }, {
                label: '21:00',
                value: '21:00'
            }, {
                label: '22:00',
                value: '22:00'
            }, {
                label: '23:00',
                value: '23:00'
            }]
        }
    },
    settings: {
        type: 'folder',
        label: 'settings',
        icon: '<svg viewBox="0 0 24 24"><path d="M19.4 13l.1-1v-1l2-1.6c.2-.2.3-.5.2-.7l-2-3.4c-.2-.3-.4-.3-.6-.3l-2.5 1-1.7-1-.4-2.6c0-.2-.3-.4-.5-.4h-4c-.3 0-.5.2-.5.4l-.4 2.7c-.6.2-1.1.6-1.7 1L5 5c-.2-.1-.4 0-.6.2l-2 3.4c0 .3 0 .5.2.7l2 1.6a8 8 0 0 0 0 2l-2 1.6c-.2.2-.3.5-.2.7l2 3.4c.2.3.4.3.6.3l2.5-1 1.7 1 .4 2.6c0 .2.2.4.5.4h4c.3 0 .5-.2.5-.4l.4-2.7c.6-.2 1.1-.6 1.7-1l2.5 1c.2.1.4 0 .6-.2l2-3.4c0-.2 0-.5-.2-.7l-2-1.6zM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"></svg>',

        languages: {
            type: 'folder',
            icon: '<svg viewBox="0 0 24 24"><path d="M12.9 15l-2.6-2.4c1.8-2 3-4.2 3.8-6.6H17V4h-7V2H8v2H1v2h11.2c-.7 2-1.8 3.8-3.2 5.3-1-1-1.7-2.1-2.3-3.3h-2c.7 1.6 1.7 3.2 3 4.6l-5.1 5L4 19l5-5 3.1 3.1.8-2zm5.6-5h-2L12 22h2l1.1-3H20l1.1 3h2l-4.5-12zm-2.6 7l1.6-4.3 1.6 4.3H16z"></svg>',

            language: {
                label: 'language',
                type: 'select',
                onchange: function(name, value) {
                    Satus.locale(function() {
                        let container = document.querySelector('.satus-main__container');

                        container.innerHTML = '';

                        Satus.render(container, Menu.main.settings.languages);
                    });
                },
                options: [{
                    value: "en",
                    label: "English"
                }, {
                    value: "ru",
                    label: "Русский"
                }]
            }
        },
        backup_and_reset: {
            type: 'folder',
            label: 'backupAndReset',
            icon: '<svg viewBox="0 0 24 24"><path d="M13.3 3A9 9 0 0 0 4 12H2.2c-.5 0-.7.5-.3.8l2.7 2.8c.2.2.6.2.8 0L8 12.8c.4-.3.1-.8-.3-.8H6a7 7 0 1 1 2.7 5.5 1 1 0 0 0-1.3.1 1 1 0 0 0 0 1.5A9 9 0 0 0 22 11.7C22 7 18 3.1 13.4 3zm-.6 5c-.4 0-.7.3-.7.8v3.6c0 .4.2.7.5.9l3.1 1.8c.4.2.8.1 1-.2.2-.4.1-.8-.2-1l-3-1.8V8.7c0-.4-.2-.7-.7-.7z"></svg>',

            section: {
                type: 'section',
                import_settings: {
                    type: 'button',
                    label: 'importSettings',
                    style: {
                        width: '100%'
                    },

                    onclick: function() {
                        try {
                            let input = document.createElement('input');

                            input.type = 'file';
                            input.accept = '.json';

                            input.addEventListener('change', function() {
                                let file_reader = new FileReader();

                                file_reader.onload = function() {
                                    let data = JSON.parse(this.result);

                                    for (var i in data) {
                                        Satus.storage.set(i, data[i]);
                                    }

                                    document.querySelector('.satus').appendChild(Satus.components.dialog({
                                        type: 'dialog',

                                        message: {
                                            type: 'text',
                                            label: 'successfullyImportedSettings',
                                            style: {
                                                'width': '100%',
                                                'opacity': '.8'
                                            }
                                        },
                                        section: {
                                            type: 'section',
                                            class: 'controls',
                                            style: {
                                                'justify-content': 'flex-end',
                                                'display': 'flex'
                                            },

                                            cancel: {
                                                type: 'button',
                                                label: 'cancel',
                                                onclick: function() {
                                                    let scrim = document.querySelectorAll('.satus-dialog__scrim');

                                                    scrim[scrim.length - 1].click();
                                                }
                                            },
                                            ok: {
                                                type: 'button',
                                                label: 'OK',
                                                onclick: function() {
                                                    let scrim = document.querySelectorAll('.satus-dialog__scrim');

                                                    scrim[scrim.length - 1].click();
                                                }
                                            }
                                        }
                                    }));
                                };

                                file_reader.readAsText(this.files[0]);
                            });

                            input.click();
                        } catch (err) {
                            chrome.runtime.sendMessage({
                                name: 'dialog-error',
                                value: err
                            });
                        }
                    }
                },
                export_settings: {
                    type: 'button',
                    label: 'exportSettings',
                    style: {
                        width: '100%'
                    },

                    onclick: function() {
                        chrome.runtime.sendMessage({
                            name: 'download',
                            filename: 'improvedtube-settings.json',
                            value: Satus.storage.get('')
                        });
                    }
                },
                reset_all_settings: {
                    type: 'button',
                    label: 'resetAllSettings',
                    style: {
                        width: '100%'
                    },

                    onclick: function() {
                        document.querySelector('.satus').appendChild(Satus.components.dialog({
                            type: 'dialog',

                            message: {
                                type: 'text',
                                label: 'thisWillResetAllSettings',
                                style: {
                                    'width': '100%',
                                    'opacity': '.8'
                                }
                            },
                            section: {
                                type: 'section',
                                class: 'controls',
                                style: {
                                    'justify-content': 'flex-end',
                                    'display': 'flex'
                                },

                                cancel: {
                                    type: 'button',
                                    label: 'cancel',
                                    onclick: function() {
                                        let scrim = document.querySelectorAll('.satus-dialog__scrim');

                                        scrim[scrim.length - 1].click();
                                    }
                                },
                                accept: {
                                    type: 'button',
                                    label: 'accept',
                                    onclick: function() {
                                        let scrim = document.querySelectorAll('.satus-dialog__scrim');

                                        Satus.storage.clear();

                                        scrim[scrim.length - 1].click();
                                    }
                                }
                            }
                        }));
                    }
                }
            }
        },
        date_and_time: {
            type: 'folder',
            label: 'dateAndTime',
            icon: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-.2-13c-.5 0-.8.3-.8.7v4.7c0 .4.2.7.5.9l4.1 2.5c.4.2.8 0 1-.3.2-.3.1-.7-.2-1l-3.9-2.2V7.7c0-.4-.3-.7-.7-.7z"></svg>',

            use_24_hour_format: {
                type: 'switch',
                label: 'use24HourFormat',
                value: true
            }
        },
        about: {
            type: 'folder',
            icon: '<svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></svg>',

            extension_section: {
                type: 'section',
                label: 'extension',
                style: {
                    minHeight: 'auto',
                    margin: '16px 0 8px',
                    flexDirection: 'column'
                },

                version: {
                    type: 'text',
                    label: 'version',
                    value: chrome.runtime.getManifest().version
                },
                permissions: {
                    type: 'text',
                    label: 'permissions',
                    value: chrome.runtime.getManifest().permissions.join(', ')
                },
            },

            browser_section: {
                type: 'section',
                label: 'browser',
                style: {
                    minHeight: 'auto',
                    margin: '16px 0 8px',
                    flexDirection: 'column'
                },

                name: {
                    type: 'text',
                    label: 'name',
                    value: function(satus, component) {
                        return Satus.user().browser.name;
                    }
                },
                version: {
                    type: 'text',
                    label: 'version',
                    value: function(satus, component) {
                        return Satus.user().browser.version;
                    }
                },
                platform: {
                    type: 'text',
                    label: 'platform',
                    value: function(satus, component) {
                        return Satus.user().browser.platform;
                    }
                },
                video_formats: {
                    type: 'text',
                    label: 'videoFormats',
                    value: function(satus, component) {
                        var formats = Satus.user().browser.video,
                            container = document.createElement('span');

                        for (var i in formats) {
                            if (formats[i]) {
                                var format = document.createElement('span');

                                format.innerText = i;
                                format.dataset.status = formats[i];

                                format.style.margin = '0 4px 0 0';
                                format.style.cursor = 'pointer';

                                format.addEventListener('click', function(event) {
                                    window.open('https://en.m.wikipedia.org/wiki/' + this.innerText, '_blank', 'left=' + (screen.width / 2 - 200) + ',top=' + (screen.height / 2 - 200) + ',height=400,width=400');
                                });

                                container.appendChild(format);
                            }
                        }

                        return container;
                    }
                },
                audio_formats: {
                    type: 'text',
                    label: 'audioFormats',
                    value: function(satus, component) {
                        var formats = Satus.user().browser.audio,
                            container = document.createElement('span');

                        for (var i in formats) {
                            if (formats[i]) {
                                var format = document.createElement('span');

                                format.innerText = i;
                                format.dataset.status = formats[i];

                                format.style.margin = '0 4px 0 0';
                                format.style.cursor = 'pointer';

                                format.addEventListener('click', function(event) {
                                    window.open('https://en.m.wikipedia.org/wiki/' + this.innerText, '_blank', 'left=' + (screen.width / 2 - 200) + ',top=' + (screen.height / 2 - 200) + ',height=400,width=400');
                                });

                                container.appendChild(format);
                            }
                        }

                        return container;
                    }
                },
                flash: {
                    type: 'text',
                    label: 'flash',
                    value: function(satus, component) {
                        return Satus.user().browser.flash ? true : false;
                    }
                }
            },

            os_section: {
                type: 'section',
                label: 'os',
                style: {
                    minHeight: 'auto',
                    margin: '16px 0 8px',
                    flexDirection: 'column'
                },

                os_name: {
                    type: 'text',
                    label: 'name',
                    value: function(satus, component) {
                        return Satus.user().os.name;
                    }
                },

                os_type: {
                    type: 'text',
                    label: 'type',
                    value: function(satus, component) {
                        return Satus.user().os.type;
                    }
                }
            },

            device_section: {
                type: 'section',
                label: 'device',
                style: {
                    minHeight: 'auto',
                    margin: '16px 0 8px',
                    flexDirection: 'column'
                },

                screen: {
                    type: 'text',
                    label: 'screen',
                    value: function(satus, component) {
                        return Satus.user().device.screen;
                    }
                },
                cores: {
                    type: 'text',
                    label: 'cores',
                    value: function(satus, component) {
                        return Satus.user().device.cores;
                    }
                },
                gpu: {
                    type: 'text',
                    label: 'gpu',
                    value: function(satus, component) {
                        return Satus.user().device.gpu;
                    }
                },
                ram: {
                    type: 'text',
                    label: 'ram',
                    value: function(satus, component) {
                        return Satus.user().device.ram;
                    }
                }
            }
        }
    },

    made_with_love: {
        type: 'text',
        class: ['made-with-love'],
        innerHTML: 'Made with <svg viewBox="0 0 24 24"><path d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"></svg> by <span>ImprovedTube</span>',
        on: {
            click: function() {
                window.open('https://chrome.google.com/webstore/detail/improve-youtube-open-sour/bnomihfieiccainjcjblhegjgglakjdd');
            }
        }
    }
};*/