import { GraphUtils } from "../utils/graphUtils";


/**
 * This parser class will read and format the data as per the required chart.
 */
export class Parser {
    graphUtils: GraphUtils = new GraphUtils();

    constructor() {
    }

    private parse(type: string, el: HTMLInputElement) {
        return this.readUploadedFile(el.files[0]);
    }

    /**
     * 
     * @param file File
     * @returns Promise object
     * @description
     * Responsible for reading a file and passing it to the graph utils to format it according to the type
     */
    private readUploadedFile(file:any) {
        const reader = new FileReader();
        return new Promise((resolve, reject) => {
            /**
             * If there is an error while reading
             */
            reader.onerror = () => {
                reader.abort();
                reject(new Error("Process Terminated! Please refresh the page and try again."))
            }
            reader.onload = () => {
                const result = reader.result;
                /**
                 * If the result it empty
                 */
                if(!result.trim()){
                    reject(new Error("File invalid"));
                }
                resolve(this.graphUtils.parseDataForLineGraph(result.split(/\r|\n|\r\n/)));
            }
            reader.readAsText(file);
        });
    }

    getParsedHTMLElement = this.parse.bind(this);
}