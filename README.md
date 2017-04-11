# Protocol Documentation

## Table of Contents
* [middleware.proto](#middleware.proto)
 * [Application](#middleware.Application)
 * [ChildCfg](#middleware.ChildCfg)
 * [Empty](#middleware.Empty)
 * [Middleware](#middleware.Middleware)
* [Scalar Value Types](#scalar-value-types)

[]("middleware.proto")

## middleware.proto

The middleware layer.

This simple middleware layer will allow to have a simple way to configure
and define all the application interaction.

Indeed, to communicate applications need the destination adress.
This could be achieved by settings in each application, all the
addresses of all the applications though a configuration file.

However this would be very hard to maintain. So intead, this middleware
layer will be for now a simple directory, in which, each application will
be registered at start-up.

Every application will have a local copy of this directory, in order to
synchronously get the address of any other application.

This approach is not really reliable, a more effective approach would
be to have a consensuce algorithm as RAFT to register each application.

[]("middleware.Application")
### Application
Define on which address a given service is available.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional | The unique application name. This application name should be unique  though the whole platform. |
| address | [string](#string) | optional | The service address for gRPC request. |


[]("middleware.ChildCfg")
### ChildCfg
Define the mddleware children base settings.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| masterAddr | [string](#string) | optional | The master adress for gRPC request. If the master is not available the child will refuse to start. |
| childAddr | [string](#string) | optional | The child address to expose gRPC services. |


[]("middleware.Empty")
### Empty
An empty structure for synchronous request.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |





[]("middleware.Middleware")
### Middleware
The middleware service is here to exchange application location.

On start up, each application should:
1. Register its application.
2. Fetch all the applications locations.
3. Listen for location updates.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| registerApplication | [Application](#middleware.Application) | [Empty](#middleware.Empty) | Register in the directory the application location. |
| fetchApplications | [Empty](#middleware.Empty) | [Application](#middleware.Application) | Fetch all the currently known locations. |
| pushApplications | [Application](#middleware.Application) | [Empty](#middleware.Empty) | Update application local directory by the master. |



[]("scalar-value-types")
## Scalar Value Types

| .proto Type | Notes | C++ Type | Java Type | Python Type |
| ----------- | ----- | -------- | --------- | ----------- |
| []("double") double |  | double | double | float |
| []("float") float |  | float | float | float |
| []("int32") int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int |
| []("int64") int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long |
| []("uint32") uint32 | Uses variable-length encoding. | uint32 | int | int/long |
| []("uint64") uint64 | Uses variable-length encoding. | uint64 | long | int/long |
| []("sint32") sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int |
| []("sint64") sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long |
| []("fixed32") fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int |
| []("fixed64") fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long |
| []("sfixed32") sfixed32 | Always four bytes. | int32 | int | int |
| []("sfixed64") sfixed64 | Always eight bytes. | int64 | long | int/long |
| []("bool") bool |  | bool | boolean | boolean |
| []("string") string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode |
| []("bytes") bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str |
