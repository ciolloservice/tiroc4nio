# DOCUMENTAZIONE GOOGLE API: PEOPLE

**Fonte**: documentazione Google per l’uso delle PEOPLE API

- **Come ottenere i contatti**:
    
    `GET:` 
    
    `https://people.googleapis.com/v1/people/me/connections personFields=names,emailAddresses`
    
    - **********Body********** richiesta: **********vuoto**********.
    - **Body** risposta:
    
    ```json
    {
        "connections": [
            {
                "resourceName": "people/c5922538989753549478",
                "etag": "%EgcBAgkuNz0+GgQBAgUHIgxkSjRzVHNaMVhMRT0=",
                "names": [
                    {
                        "metadata": {
                            "primary": true,
                            "source": {
                                "type": "CONTACT",
                                "id": "523115d50ca942a6"
                            }
                        },
                        "displayName": "prova tiro",
                        "givenName": "prova tiro",
                        "displayNameLastFirst": "prova tiro",
                        "unstructuredName": "prova tiro"
                    }
                ],
                "emailAddresses": [
                    {
                        "metadata": {
                            "primary": true,
                            "source": {
                                "type": "CONTACT",
                                "id": "523115d50ca942a6"
                            }
                        },
                        "value": "ciao@gmail.com"
                    }
                ]
            },
            {
                "resourceName": "people/c1586958431405121030",
                "etag": "%EgcBAgkuNz0+GgQBAgUHIgxvMlRUbE1tTHpvZz0=",
                "names": [
                    {
                        "metadata": {
                            "primary": true,
                            "source": {
                                "type": "CONTACT",
                                "id": "1606024909369e06"
                            }
                        },
                        "displayName": "prova 2 tirocinio",
                        "familyName": "tirocinio",
                        "givenName": "prova 2",
                        "displayNameLastFirst": "tirocinio, prova 2",
                        "unstructuredName": "prova 2 tirocinio"
                    }
                ],
                "emailAddresses": [
                    {
                        "metadata": {
                            "primary": true,
                            "source": {
                                "type": "CONTACT",
                                "id": "1606024909369e06"
                            }
                        },
                        "value": "prova3@gmail.como"
                    }
                ]
            },
            {
                "resourceName": "people/c8520408078233172608",
                "etag": "%EgcBAgkuNz0+GgQBAgUHIgxGRHcvejVZRndERT0=",
                "names": [
                    {
                        "metadata": {
                            "primary": true,
                            "source": {
                                "type": "CONTACT",
                                "id": "763e92010c74fa80"
                            }
                        },
                        "displayName": "ciao giordana",
                        "familyName": "giordana",
                        "givenName": "ciao",
                        "displayNameLastFirst": "giordana, ciao",
                        "unstructuredName": "ciao giordana"
                    }
                ],
                "emailAddresses": [
                    {
                        "metadata": {
                            "primary": true,
                            "source": {
                                "type": "CONTACT",
                                "id": "763e92010c74fa80"
                            }
                        },
                        "value": "ciaogiordana@gmail.com"
                    }
                ]
            },
            {
                "resourceName": "people/c3047766114103533041",
                "etag": "%EgcBAgkuNz0+GgQBAgUHIgxKeHZXQWNGN2xCND0=",
                "names": [
                    {
                        "metadata": {
                            "primary": true,
                            "source": {
                                "type": "CONTACT",
                                "id": "2a4bd7220d9d1df1"
                            }
                        },
                        "displayName": "Samkit",
                        "givenName": "Samkit",
                        "displayNameLastFirst": "Samkit",
                        "unstructuredName": "Samkit"
                    }
                ],
                "emailAddresses": [
                    {
                        "metadata": {
                            "primary": true,
                            "source": {
                                "type": "CONTACT",
                                "id": "2a4bd7220d9d1df1"
                            }
                        },
                        "value": "samkit5495@gmail.com"
                    }
                ]
            },
            {
                "resourceName": "people/c7037896882231808384",
                "etag": "%EgcBAgkuNz0+GgQBAgUHIgxZd1QxTHltcEZmbz0=",
                "names": [
                    {
                        "metadata": {
                            "primary": true,
                            "source": {
                                "type": "CONTACT",
                                "id": "61aba1ed0f419180"
                            }
                        },
                        "displayName": "Alessandro",
                        "givenName": "Alessandro",
                        "displayNameLastFirst": "Alessandro",
                        "unstructuredName": "Alessandro"
                    }
                ],
                "emailAddresses": [
                    {
                        "metadata": {
                            "primary": true,
                            "source": {
                                "type": "CONTACT",
                                "id": "61aba1ed0f419180"
                            }
                        },
                        "value": "alecosta@gmail.com"
                    }
                ]
            },
            {
                "resourceName": "people/c2504110285447937667",
                "etag": "%EgcBAgkuNz0+GgQBAgUHIgx3UzVrYlVBMW5TMD0=",
                "names": [
                    {
                        "metadata": {
                            "primary": true,
                            "source": {
                                "type": "CONTACT",
                                "id": "22c063098a86be83"
                            }
                        },
                        "displayName": "Alessandro Costa",
                        "familyName": "Costa",
                        "givenName": "Alessandro",
                        "displayNameLastFirst": "Costa, Alessandro",
                        "unstructuredName": "Alessandro Costa"
                    }
                ],
                "emailAddresses": [
                    {
                        "metadata": {
                            "primary": true,
                            "source": {
                                "type": "CONTACT",
                                "id": "22c063098a86be83"
                            }
                        },
                        "value": "alecosta@gmail.com"
                    }
                ]
            },
            {
                "resourceName": "people/c4451727200803795427",
                "etag": "%EgcBAgkuNz0+GgQBAgUHIgx4M0FickI2U2M3ND0=",
                "names": [
                    {
                        "metadata": {
                            "primary": true,
                            "source": {
                                "type": "CONTACT",
                                "id": "3dc7b64d88dab1e3"
                            }
                        },
                        "displayName": "Alessandro Costa",
                        "familyName": "Costa",
                        "givenName": "Alessandro",
                        "displayNameLastFirst": "Costa, Alessandro",
                        "unstructuredName": "Alessandro Costa"
                    }
                ],
                "emailAddresses": [
                    {
                        "metadata": {
                            "primary": true,
                            "source": {
                                "type": "CONTACT",
                                "id": "3dc7b64d88dab1e3"
                            }
                        },
                        "value": "alessandrocosta223@gmail.com"
                    }
                ]
            },
            {
                "resourceName": "people/c641236038399901854",
                "etag": "%EgcBAgkuNz0+GgQBAgUHIgxiVWs4MVRkenh0Yz0=",
                "names": [
                    {
                        "metadata": {
                            "primary": true,
                            "source": {
                                "type": "CONTACT",
                                "id": "8e620c78e01409e"
                            }
                        },
                        "displayName": "Daniele Buono",
                        "familyName": "Buono",
                        "givenName": "Daniele",
                        "displayNameLastFirst": "Buono, Daniele",
                        "unstructuredName": "Daniele Buono"
                    }
                ],
                "emailAddresses": [
                    {
                        "metadata": {
                            "primary": true,
                            "source": {
                                "type": "CONTACT",
                                "id": "8e620c78e01409e"
                            }
                        },
                        "value": "dennyno01@gmail.com"
                    }
                ]
            }
        ],
        "totalPeople": 8,
        "totalItems": 8
    }
    ```
    
- **Come creare un nuovo contatto:**
    
    `POST: [https://people.googleapis.com/v1/people:createContact](https://people.googleapis.com/v1/people:createContact)`
    
    - **Body** richiesta:
    
    ```json
    {
    	"names": [ { "givenName": "Daniele"  , "familyName": "Buono"} ],
    	"phoneNumbers": [ { "value": "234456" } ], 
    	"emailAddresses": [ { "value": "dennyno01@gmail.com" } ] 
    }
    ```
    
    - **********Body********** risposta:
    
    ```json
    {
        "resourceName": "people/c641236038399901854",
        "etag": "%EigBAgMEBQYHCAkKCwwNDg8QERITFBUWFxkfISIjJCUmJy40NTc9Pj9AGgQBAgUHIgxiVWs4MVRkenh0Yz0=",
        "metadata": {
            "sources": [
                {
                    "type": "CONTACT",
                    "id": "8e620c78e01409e",
                    "etag": "#bUk81Tdzxtc=",
                    "updateTime": "2023-03-29T08:09:22.140191Z"
                },
                {
                    "type": "PROFILE",
                    "id": "100997152194831127595",
                    "etag": "#ljYY7oWcZ94=",
                    "profileMetadata": {
                        "objectType": "PERSON",
                        "userTypes": [
                            "GOOGLE_USER"
                        ]
                    },
                    "updateTime": "2023-03-25T15:01:08.738314Z"
                }
            ],
            "objectType": "PERSON"
        },
        "names": [
            {
                "metadata": {
                    "primary": true,
                    "source": {
                        "type": "CONTACT",
                        "id": "8e620c78e01409e"
                    }
                },
                "displayName": "Daniele Buono",
                "familyName": "Buono",
                "givenName": "Daniele",
                "displayNameLastFirst": "Buono, Daniele",
                "unstructuredName": "Daniele Buono"
            }
        ],
        "coverPhotos": [
            {
                "metadata": {
                    "primary": true,
                    "source": {
                        "type": "PROFILE",
                        "id": "100997152194831127595"
                    }
                },
                "url": "https://lh3.googleusercontent.com/c5dqxl-2uHZ82ah9p7yxrVF1ZssrJNSV_15Nu0TUZwzCWqmtoLxCUJgEzLGtxsrJ6-v6R6rKU_-FYm881TTiMCJ_=s1600",
                "default": true
            }
        ],
        "photos": [
            {
                "metadata": {
                    "primary": true,
                    "source": {
                        "type": "PROFILE",
                        "id": "100997152194831127595"
                    }
                },
                "url": "https://lh3.googleusercontent.com/a-/ACB-R5TMfZgL80uyEYHo0roJEoh1G-eX8PgbsA3lDq995w=s100"
            },
            {
                "metadata": {
                    "source": {
                        "type": "CONTACT",
                        "id": "8e620c78e01409e"
                    }
                },
                "url": "https://lh3.googleusercontent.com/cm/AAkddupN_MeYuxgFtMFK_24UWI8Kg-l4NcDunl6Kq8-6kK9qXIzNqZjRVuL4cnt6gO8D=s100",
                "default": true
            }
        ],
        "emailAddresses": [
            {
                "metadata": {
                    "primary": true,
                    "source": {
                        "type": "CONTACT",
                        "id": "8e620c78e01409e"
                    }
                },
                "value": "dennyno01@gmail.com"
            }
        ],
        "phoneNumbers": [
            {
                "metadata": {
                    "primary": true,
                    "source": {
                        "type": "CONTACT",
                        "id": "8e620c78e01409e"
                    }
                },
                "value": "234456"
            }
        ],
        "memberships": [
            {
                "metadata": {
                    "source": {
                        "type": "CONTACT",
                        "id": "8e620c78e01409e"
                    }
                },
                "contactGroupMembership": {
                    "contactGroupId": "myContacts",
                    "contactGroupResourceName": "contactGroups/myContacts"
                }
            }
        ]
    }
    ```
    
- **Come eliminare un contatto:**
    
    `DELETE: [https://people.googleapis.com/v1/people/c7037896882231808384:deleteContact](https://people.googleapis.com/v1/people/c7037896882231808384:deleteContact)`
    
    - **********Body********** richiesta: **********vuoto**********.
    - **Body** risposta: se **vuoto** la richiesta è andata a buon fine.
        - Esempio: `people/c7037896882231808384` (si trova nell’uri della richiesta sopra scritta) è il **resourceName**, indicato nei campi dei contatti nella richiesta.
        - In questo caso è stato eliminato il contatto di Alessandro che ha quel **resourceName.**
- **Come aggiornare un contatto:**
    
    `PATCH: [https://people.googleapis.com/v1/people/{CONTACT_ID}:updateContact?updatePersonFields=emailAddresses](https://people.googleapis.com/v1/people/c5922538989753549478:updateContact?updatePersonFields=emailAddresses)`
    
    - **Body** richiesta:
    
    ```json
    {
        "resourceName": "people/c5922538989753549478",
        "etag": "%EgcBAgkuNz0+GgQBAgUHIgxkSjRzVHNaMVhMRT0=",
        "emailAddresses": [{ "value": "prova22@gmail.com" }]
    }
    ```
    
    - **********Body********** risposta:
    
    ```json
    {
        "resourceName": "people/c5922538989753549478",
        "etag": "%EigBAgMEBQYHCAkKCwwNDg8QERITFBUWFxkfISIjJCUmJy40NTc9Pj9AGgQBAgUHIgxKQ1Mwb2V2ZkF5UT0=",
        "metadata": {
            "sources": [
                {
                    "type": "CONTACT",
                    "id": "523115d50ca942a6",
                    "etag": "#JCS0oevfAyQ=",
                    "updateTime": "2023-03-29T14:11:24.784148Z"
                }
            ],
            "objectType": "PERSON"
        },
        "names": [
            {
                "metadata": {
                    "primary": true,
                    "source": {
                        "type": "CONTACT",
                        "id": "523115d50ca942a6"
                    }
                },
                "displayName": "prova tiro",
                "givenName": "prova tiro",
                "displayNameLastFirst": "prova tiro",
                "unstructuredName": "prova tiro"
            }
        ],
        "photos": [
            {
                "metadata": {
                    "primary": true,
                    "source": {
                        "type": "CONTACT",
                        "id": "523115d50ca942a6"
                    }
                },
                "url": "https://lh3.googleusercontent.com/cm/AAkdduqrKlVOevU4Mz1vA8zPtYvq5RT5PicWya9hw3XbnFZKW9JhImaahzkzF3EgGFpf=s100",
                "default": true
            }
        ],
        "emailAddresses": [
            {
                "metadata": {
                    "primary": true,
                    "source": {
                        "type": "CONTACT",
                        "id": "523115d50ca942a6"
                    }
                },
                "value": "prova22@gmail.com"
            }
        ],
        "phoneNumbers": [
            {
                "metadata": {
                    "primary": true,
                    "source": {
                        "type": "CONTACT",
                        "id": "523115d50ca942a6"
                    }
                },
                "value": "00 000",
                "type": "mobile",
                "formattedType": "Mobile"
            }
        ],
        "memberships": [
            {
                "metadata": {
                    "source": {
                        "type": "CONTACT",
                        "id": "523115d50ca942a6"
                    }
                },
                "contactGroupMembership": {
                    "contactGroupId": "54a944948fb846fc",
                    "contactGroupResourceName": "contactGroups/54a944948fb846fc"
                }
            },
            {
                "metadata": {
                    "source": {
                        "type": "CONTACT",
                        "id": "523115d50ca942a6"
                    }
                },
                "contactGroupMembership": {
                    "contactGroupId": "myContacts",
                    "contactGroupResourceName": "contactGroups/myContacts"
                }
            }
        ]
    }
    ```
    
- **Come creare un gruppo:**
    
    `POST: [https://people.googleapis.com/v1/contactGroups](https://people.googleapis.com/v1/contactGroups)`
    
    - **********Body********** richiesta:
    
    ```json
    {
        "contactGroup": {
            "name": "nome gruppo"
        }
    }
    ```
    
    - **********Body********** risposta:
    
    ```json
    {
        "resourceName": "contactGroups/12bf18b68f814289",
        "etag": "weXF6NGJ5C8=",
        "metadata": {
            "updateTime": "2023-03-29T15:18:38.215611Z"
        },
        "groupType": "USER_CONTACT_GROUP",
        "name": "nome gruppo",
        "formattedName": "numo gruppo"
    }
    ```
    
- Come aggiungere i contatti ad un gruppo:
    
    `POST: [https://people.googleapis.com/v1/contactGroups/{GROUP_ID}/members:modify](https://people.googleapis.com/v1/contactGroups/12bf18b68f814289/members:modify?access_token=ya29.a0Ael9sCOZiPzDCx-7ZV0PKC54hRlEkLVf168QOdA7HEUTLR4ryvN2Sb9gOqZuGwQHn7x0Xgn_qyv3a1u4VjcCSaEqXghhSddf-gCXl9nc61S1MdcJGm0D1WBwO8kmXiZkUSJHDYf9jTKPTUk16TI644O-YjfemAaCgYKAQYSARASFQF4udJh7-86AFfszcV1gDvxzUAgbA0165)`
    
    - **********Body********** richiesta:
    
    ```json
    {
        "resourceNamesToAdd": [
            "people/{resourceName}",
            "people/{resourceName}"
        ]
    }
    ```
    
    - **********Body********** risposta: **********vuoto.**********
- **Come eliminare un gruppo:**
    
    `DELETE: [https://people.googleapis.com/v1/contactGroups/{GROUP_ID}](https://people.googleapis.com/v1/contactGroups/12bf18b68f814289?access_token=ya29.a0Ael9sCOZiPzDCx-7ZV0PKC54hRlEkLVf168QOdA7HEUTLR4ryvN2Sb9gOqZuGwQHn7x0Xgn_qyv3a1u4VjcCSaEqXghhSddf-gCXl9nc61S1MdcJGm0D1WBwO8kmXiZkUSJHDYf9jTKPTUk16TI644O-YjfemAaCgYKAQYSARASFQF4udJh7-86AFfszcV1gDvxzUAgbA0165)`
    
    - **********Body********** richiesta: **********vuoto**********
    - ********************Body******************** risposta: ****vuoto**** solo se è andata a buon fine.