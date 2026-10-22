
export function ValidateMissionState(
    target : object,
    propertyKey : string | symbol,
    descriptor : PropertyDescriptor
) : void 
{
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const Astr = args[0];

        if (Astr.MissionState !== "Pending") {
            throw new Error(
                "Only Astronauts With A Pending Mission Can Be Added"
            );
        }

        return originalMethod.apply(this, args);
    }
}
