export default class Content {
    private temperature: string = "0"
    constructor(temperature: string){
        this.temperature = temperature
    }

    /**
     * Getter $temperature
     * @return {string }
     */
	public get $temperature(): string  {
		return this.temperature;
	}

    /**
     * Setter $temperature
     * @param {string } value
     */
	public set $temperature(value: string ) {
		this.temperature = value;
	}

}