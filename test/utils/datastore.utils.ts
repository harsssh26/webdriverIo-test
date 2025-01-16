class DataStore {

        // Will be used to store the data required through the test execution
        private dataStore: Map<string, string | number | boolean | Map<string, Array<string>>> = new Map<string, string | number | boolean | Map<string, Array<string>>>();

        /**
         * Stores the required data
         * 
         * @param key Key against which to store the data
         * @param value Value to store
         */
        public storeData(
                key: string,
                value: string | number | boolean | Map<string, Array<string>>
        ): void {
                if (this.dataStore.has(key)) {
                        console.log(`Replacing existing key-value pair:\n
                                        Key: ${key}, Value: ${this.dataStore.get(key)}\n
                                        with\n
                                        New Key: ${key}, New Value: ${value}`)
                } else {
                        console.log(`Adding new key-value pair:\n
                                        Key: ${key}, Value: ${value}`)
                }

                this.dataStore.set(key, value)
        }

        /**
         * Returns the requested data from the store
         * 
         * @param key Keys agains  which data will be received
         * @returns {string | number | boolean | Map<K, V> | undefined}
         */
        public getData(
                key: string
        ): string | number | boolean | Map<string, Array<string>> | undefined {
                if (this.dataStore.has(key)) {
                        console.log(`Data: ${key}=> ${this.dataStore.get(key)}`)
                        return this.dataStore.get(key)
                } else {
                        console.log(`No data found for key: ${key}`)
                        return '<Data Missing>'
                }
        }

        /**
         * Returns the entire data store
         * 
         * @returns {Map<string, string | number | boolean | Map<string, Array<string>>>}
         */
        public getStorage() : Map<string, string | number | boolean | Map<string, Array<string>>>{
                return this.dataStore
        }
}

export default DataStore