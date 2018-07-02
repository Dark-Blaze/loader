import { ArrayType } from "@angular/compiler/src/output/output_ast";

interface GraphMethods {
    parseDataForLineGraph(data: Array<any>): any;

    parseDateforPieChart(data: any): any;

    parseDateforHistogram(data: any): any;

}

export class GraphUtils implements GraphMethods {
    parseDateforPieChart(data: any) {
        throw new Error("Method not implemented.");
    }
    parseDateforHistogram(data: any) {
        throw new Error("Method not implemented.");
    }

    parseDataForLineGraph(data: Array<any>) {
        if (!data) {
            throw new Error("Data invalid!")
        }
        return data.map((graphData, key) => {
            const datum: any = {};
            [datum["name"], ...datum["series"]] = graphData.split(",");
            datum["series"] = [...datum["series"]].map((v, k) => {
                const o = {};
                [o["name"], o["value"]] = v.split("|");
                return o;
            });
            return datum;
        });
    }

}