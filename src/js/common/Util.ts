//https://github.com/reactjs/redux/issues/585#issuecomment-132865158
export const copy = <T>(object: any): T => {
    return <T>JSON.parse(JSON.stringify(object));
}