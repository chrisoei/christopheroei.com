export interface Blob {
    sha2_256: string
    ext: string
}

export const baseURL = "https://www.christopheroei.com/"
export const blobBaseURL = baseURL + "b/"

export const blobURL = (b: Blob): string => {
    return blobBaseURL + b.sha2_256 + "." + b.ext
}

export const getBlob = (u: string): Blob => {
    var r1 = /(\p{Hex_Digit}{64})\.([0-9A-Za-z]+)$/u
    var m1 = u.match(r1)
    console.assert(m1 != null)
    if (m1 == null) {
        // FIXIT
        return { sha2_256: "error", ext: "error" }
    } else {
        return { sha2_256: m1[1], ext: m1[2] }
    }
}
