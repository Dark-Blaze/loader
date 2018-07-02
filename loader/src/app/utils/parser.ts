import { GraphUtils } from "../utils/graphUtils";
import { debug } from "util";


export class Parser {
    graphUtils: GraphUtils = new GraphUtils();
    dataPoints: any;

    constructor() {
    }

    private async parse(type: string, el: HTMLInputElement) {
        return this.readUploadedFile(el.files[0]);
    }

    private readUploadedFile(file:any) {
        const reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onerror = () => {
                reader.abort();
                reject(new Error("Process Terminated! Please refresh the page and try again."))
            }
            reader.onload = () => {
                const result = reader.result;
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