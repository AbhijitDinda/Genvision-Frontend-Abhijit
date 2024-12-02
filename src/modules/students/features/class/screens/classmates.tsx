import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useListClassmates } from "../store/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DetailedMarksSkeleton = () => {
  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>
              <Skeleton className="h-6 w-48" />
            </CardTitle>
            <div className="w-[180px]">
              <Skeleton className="h-8 w-full" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Skeleton className="h-4 w-20" />
                </TableHead>
                <TableHead>
                  <Skeleton className="h-4 w-20" />
                </TableHead>
                <TableHead>
                  <Skeleton className="h-4 w-20" />
                </TableHead>
                <TableHead>
                  <Skeleton className="h-4 w-20" />
                </TableHead>
                <TableHead>
                  <Skeleton className="h-4 w-20" />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton className="h-4 w-32" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-16" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-16" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-16" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-8 w-24" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

const Classmates = () => {
  const { data, isLoading } = useListClassmates();

  return (
    <>
      {isLoading ? (
        <DetailedMarksSkeleton />
      ) : data?.data.length > 0 ? (
        <div className="p-4 space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Detailed Marks Dashboard</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Profile</TableHead>
                    <TableHead>Full Name</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead>dateOfBirth</TableHead>
                    {/* <TableHead>Phonenumber</TableHead> */}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.data.map((data: any) => (
                    <TableRow key={data.id}>
                      <Avatar>
                        <AvatarImage
                          src={data.profilePicture}
                          alt={data?.accounts?.fullName}
                        />
                        <AvatarFallback>
                          {data?.accounts?.firstName.charAt(0) +
                            data?.accounts?.lastName.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <TableCell>{data?.accounts?.fullName}</TableCell>
                      <TableCell>{data?.accounts?.username}</TableCell>
                      <TableCell>{data?.accounts?.dateOfBirth}</TableCell>
                      {/* <TableCell>{mark.maxScore}</TableCell> */}
                      {/* <TableCell>
                        {((mark.marksObtained / mark.maxScore) * 100).toFixed(
                          2
                        )}
                        %
                      </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="flex-1">
          <div
            className={
              "flex flex-1 m-16 items-center h-[500px] justify-center rounded-lg border border-dashed shadow-sm"
            }
            x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">No Marks</h3>
              <p className="text-sm text-muted-foreground">
                There is no data about your marks
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Classmates;
