# Build stage
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY ["SJMC.CMS.API.csproj", "./"]
RUN dotnet restore "SJMC.CMS.API.csproj"

COPY . .

RUN --mount=type=secret,id=sixlabors_lic,dst=/etc/secrets/sixlabors.lic,required=true \
    dotnet publish "SJMC.CMS.API.csproj" \
    -c Release \
    -o /app/publish \
    /p:SixLaborsLicenseFile=/etc/secrets/sixlabors.lic \
    /p:UseAppHost=false

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app

COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:10000
EXPOSE 10000

ENTRYPOINT ["dotnet", "SJMC.CMS.API.dll"]
