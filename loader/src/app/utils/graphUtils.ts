
/**
 * This interface is required to devalre all kinds of graph functions which will them be implemented by the developer
 */
interface GraphMethods {
    /**
     * 
     * @param data Graph Data - Array
     */
    parseDataForLineGraph(data: Array<any>): any;

    /**
     * 
     * @param data GraphData - Array
     */
    parseDateforPieChart(data: any): any;

    /**
     * 
     * @param data GraphData - Array
     */
    parseDateforHistogram(data: any): any;

}


/**
 * This class provides all the graph related methods for implementation
 */
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