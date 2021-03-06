import Argument from './Argument';
import ParameterTypeRegistry from './ParameterTypeRegistry';
import Expression from './Expression';
export default class RegularExpression implements Expression {
    readonly regexp: RegExp;
    private readonly parameterTypeRegistry;
    private readonly treeRegexp;
    constructor(regexp: RegExp, parameterTypeRegistry: ParameterTypeRegistry);
    match(text: string): Argument<any>[];
    readonly source: string;
}
