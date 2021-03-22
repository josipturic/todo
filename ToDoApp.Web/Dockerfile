# Dockerfile

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . .
RUN dotnet publish -c Release -o out

# Build
WORKDIR /src
COPY NuGet.Config .
COPY ["ToDoApp.Web.csproj", "ToDoApp.Web/"]

RUN dotnet restore --configfile NuGet.Config "ToDoApp.Web.csproj"
COPY . .
WORKDIR "/src/ToDoApp.Web"
RUN dotnet build "ToDoApp.Web.csproj" -c Release -o /app/build

# Publish
FROM build AS publish
RUN dotnet publish "ToDoApp.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

ENTRYPOINT ["dotnet", "ToDoApp.Web.dll"]